const express = require('express');
const app = express();
const pg = require('pg');

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select "gradeId",
    "name",
    "course",
    "score",
    "createdAt"
  from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'Missing either name, course, or score' });
    return;
  }
  if (req.body.score < 0 || req.body.scroe > 100) {
    res.status(400).json({ error: 'Invalid score. Score must be intger between 0 to 100.' });
    return;
  }

  const sql = `
     insert into "grades" ("name", "course", "score")
          values ($1, $2, $3);
   `;
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:id', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'All fields are not completed' });
  }
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer"' });
  }
  if (req.body.score < 0 || req.body.score > 100) {
    res.status(404).json({ error: 'score needs to be an intger between 0 to 100' });
  }
  const sql = ` UPDATE "grades"
                    SET "name" = $2,
                        "course" = $3,
                        "score" = $4
                  WHERE "gradeId" = $1;`;
  const params = [gradeId, req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      res.status(200).json(req.body);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!gradeId) {
    res.status(400).json({ error: 'Please insert a valid gradeId' });
  }

  const sql = `DELETE FROM "grades"
                      WHERE "gradeId" = $1;`;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      res.sendStatus(204);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});
app.listen(3000, () => {
  console.error('Server is running and listening at port 3000!');
});
