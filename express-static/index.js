const express = require('express');
const path = require('path');
const app = express();

const join = path.join(__dirname, 'public');
const middleware = express.static(join);

app.use(middleware);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
