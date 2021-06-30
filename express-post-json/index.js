const express = ('express');
const app = express;
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const tArray = [];
  for (const x in grades) {
    tArray.push(grades[x]);
  }
  res.json(tArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;

  const currentId = nextId;
  nextId++;
  res.status(201).json(grades[currentId]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening in port 3000.');
});
