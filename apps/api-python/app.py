from flask import Flask, request, jsonify, g
from flask_cors import CORS
import sqlite3
import uuid
from functools import wraps
import os

app = Flask(__name__)
CORS(app)

DATABASE = "enterprise.db"

# Ensure DB file is created and schema initialized
def init_db():
    with sqlite3.connect(DATABASE) as conn:
        c = conn.cursor()
        c.execute("CREATE TABLE IF NOT EXISTS users (username TEXT PRIMARY KEY, password TEXT)")
        c.execute("CREATE TABLE IF NOT EXISTS tokens (token TEXT PRIMARY KEY, username TEXT)")
        c.execute("CREATE TABLE IF NOT EXISTS invoices (id INTEGER PRIMARY KEY AUTOINCREMENT, amount REAL)")
        c.execute("CREATE TABLE IF NOT EXISTS agreements (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)")
        c.execute("INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)", ("admin", "password123"))
        conn.commit()

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(DATABASE)
        g.db.row_factory = sqlite3.Row
    return g.db

@app.teardown_appcontext
def close_db(error):
    db = g.pop('db', None)
    if db:
        db.close()

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        db = get_db()
        cur = db.execute("SELECT username FROM tokens WHERE token = ?", (token,))
        if not cur.fetchone():
            return jsonify({"error": "Unauthorized"}), 401
        return f(*args, **kwargs)
    return decorated

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    db = get_db()
    cur = db.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
    if cur.fetchone():
        token = str(uuid.uuid4())
        db.execute("INSERT INTO tokens (token, username) VALUES (?, ?)", (token, username))
        db.commit()
        return jsonify({"token": token})
    return jsonify({"error": "Invalid credentials"}), 401

@app.route('/api/invoices', methods=['GET', 'POST'])
@token_required
def manage_invoices():
    db = get_db()
    if request.method == 'GET':
        invoices = db.execute("SELECT * FROM invoices").fetchall()
        return jsonify([dict(row) for row in invoices])
    elif request.method == 'POST':
        amount = request.json.get("amount", 0)
        db.execute("INSERT INTO invoices (amount) VALUES (?)", (amount,))
        db.commit()
        return jsonify({"status": "created"}), 201

@app.route('/api/invoices/<int:invoice_id>', methods=['PUT', 'DELETE'])
@token_required
def update_delete_invoice(invoice_id):
    db = get_db()
    if request.method == 'PUT':
        amount = request.json.get("amount", 0)
        db.execute("UPDATE invoices SET amount = ? WHERE id = ?", (amount, invoice_id))
        db.commit()
        return jsonify({"status": "updated"})
    elif request.method == 'DELETE':
        db.execute("DELETE FROM invoices WHERE id = ?", (invoice_id,))
        db.commit()
        return jsonify({"status": "deleted"})

@app.route('/api/agreements', methods=['GET'])
@token_required
def get_agreements():
    db = get_db()
    agreements = db.execute("SELECT * FROM agreements").fetchall()
    return jsonify([dict(row) for row in agreements])

@app.route('/api/seed', methods=['POST'])
@token_required
def seed_data():
    db = get_db()
    db.executemany("INSERT INTO invoices (amount) VALUES (?)", [(700.25,), (999.99,), (123.45,)])
    db.executemany("INSERT INTO agreements (title) VALUES (?)", [
        ("Defense Funding Agreement",),
        ("Civil Agency Support",),
        ("Federal Shared Services",)
    ])
    db.commit()
    return jsonify({"status": "seeded"})

if __name__ == '__main__':
    if not os.path.exists(DATABASE):
        init_db()
    else:
        try:
            get_db()
        except:
            init_db()
    app.run(debug=True)
