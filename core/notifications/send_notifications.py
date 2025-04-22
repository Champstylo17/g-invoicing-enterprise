import smtplib
from email.message import EmailMessage

def send_email(to_email, subject, body):
    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = "noreply@ginvoicing.gov"
    msg['To'] = to_email
    msg.set_content(body)

    with smtplib.SMTP('localhost') as server:
        server.send_message(msg)
    print(f"Notification sent to {to_email}")

if __name__ == "__main__":
    send_email("admin@example.com", "Invoice Alert", "A new invoice has been submitted.")