const fs = require('fs');

async function snapshot() {
  const db = require('../../apps/api/models'); // mock import
  const data = { invoices: [], users: [] }; // stub
  fs.writeFileSync('db_snapshot.json', JSON.stringify(data, null, 2));
  console.log('✅ Snapshot written to db_snapshot.json');
}

snapshot();