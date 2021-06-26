const fs = require('fs');
const data = require('./data.json');

const operation = process.argv[2];

if (operation === 'read') {

  for (const noteId in data.notes) {
    process.stdout.write(`${noteId}: ${data.notes[noteId]}\n`);
  }

} else if (operation === 'create') {

  const noteId = data.nextId;
  const newNote = process.argv[3];
  data.nextId++;
  data.notes[noteId] = newNote;
  writeData(data);

} else if (operation === 'update') {

  const noteId = process.argv[3];
  const updatedNote = process.argv[4];
  data.notes[noteId] = updatedNote;
  writeData(data);

} else if (operation === 'delete') {

  const noteId = process.argv[3];
  delete data.notes[noteId];
  writeData(data);

}

function writeData(data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', json, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
