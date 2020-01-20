const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('../models/stocks-db.js');

const app = express();
// const stock = require('../routes/stock');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const mockResponse = {
  foo: 'bar',
  bar: 'foo',
};

db.query('SELECT NOW()', (err, result) => {
  if (err) {
    return ({ log: err.stack, message: 'Error executing query in getData' });
  }
  console.log('result', result.rows);
});

db.query('SELECT * from stocks', (err, result) => {
  if (err) {
    return ({ log: err.stack, message: 'Error executing query in getData' });
  }
  console.log('result', result.rows);
});


app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

// app.use('/api/stock', stock);

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/', (req, res) => {
  res.status(200).sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
