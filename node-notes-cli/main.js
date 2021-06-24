const fs = require('fs');
const data = require('./data.json');
const op = process.argv[2];
function updateData() {
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw (err);
  });
}

if (op === 'read') {
  for (const key in data.notes) {
    console.log(key + data.notes[key]);
  }
}

if (op === 'create') {
  const key = data.nextId;
  data.notes[key] = process.argv[3];
  data.nextId++;
  updateData();
}

if (op === 'delete') {
  const key = process.argv[3];
  delete data.notes[key];
  updateData();
}

if (op === 'update') {
  const key = process.argv[3];
  data.notes[key] = process.argv[4];
  updateData();
}
