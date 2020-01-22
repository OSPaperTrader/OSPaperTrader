const express = require('express');
const path = require('path');
const mainController = require('./controller.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const auth = require('./auth/index');

const app = express();

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

// mounting the auth router. any request that come to auth will be sent to the auth router
app.use('/auth', auth);

app.get('/api/:email', mainController.getTransData, (req, res) => {
  res.json(res.locals.data);
});

app.get('/watchListData/:id', mainController.getWatchListData, (req, res) => {
  res.sendFile(res.locals.data);
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

// app.get('/login', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../views/login.html'))
// });

// app.get('/signup', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../views/signup.html'))
// });

// catch 404 and forward to error handler
app.use((req, res, next) => {
  // res.status(404).send('Not found');
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // console.error(res.locals.error)
  // res.end()
  // throw new error(res.locals.error);
  res.status(err.status || res.statusCode || 500);
  res.json({
    message: err.message,
    // determines whether or not you are in development mode and decides to show the stack trace
    error: req.app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
