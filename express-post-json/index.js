const express = ('express');
const app = express;
let nextId = 1;
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

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
