const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const tArray = [];
  for (const note in data.notes) {
    tArray.push(data.notes[note]);
  }
  res.json(tArray);
});

app.get('/api/notes/:id', (req, res) => {
  if (isNaN(req.params.id) || req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive number' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: 'invalid notes with that id' });
  } else {
    res.json(data.notes[req.params.id]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'an unexpected error occured.' });
  } else {
    const id = data.nextId++;
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;

    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'an unexpected error occured.' });
      } else {
        res.status(201).json(data.notes[id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (isNaN(req.params.id) || req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive number' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: 'invalid notes with that id' });
  } else {
    delete data.notes[req.params.id];

    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'an unexpected error occured.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (isNaN(req.params.id) || req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive number' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: 'cannot find note with id' });
  } else {
    data.notes[req.params.id] = req.body;
    data.notes[req.params.id].id = req.params.id;

    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJSON, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'an unexpected error occured.' });
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening in port 3000.');
});
