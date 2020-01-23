const express = require('express');
const path = require('path');
const mainController = require('./controller.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const auth = require('./auth/index');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./auth/middleware')
const session = require('express-session');
const dotenv = require('dotenv')


const app = express();

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(express.static(DIST_DIR));
app.use(cors());

app.use(session({ resave: true ,secret: 'secret' , saveUninitialized: true}));
// mounting the auth router. any request that come to auth will be sent to the auth router
app.use('/auth', auth);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.get('/api/:email', mainController.getTransData, (req, res) => {
  console.log('res.locals.data index.js', res.locals.data);
  res.json({
    transactions: res.locals.data,
    cash: res.locals.cash
  });
});

app.post(
  '/watchListData/:email/:symbol',
  mainController.addWatchlistItem,
  (req, res) => {
    res.json(res.locals.data);
  }
);

app.get('/watchlistData/:email', mainController.getWatchListData, (req, res) => {
  res.json(res.locals.data);
});

app.delete(
  '/watchListData/:email/:delete',
  mainController.deleteWatchlistItem,
  (req, res) => {
    res.json(res.locals.delete);
  }
);

app.post(
  '/portfolio/buy/:email/:symbol',
  mainController.buySecurity,
  (req, res) => {
    res.json(res.locals.data);
  }
);

app.post(
  '/portfolio/sell/:email/:symbol',
  mainController.sellSecurity,
  (req, res) => {
    res.json(res.locals.data);
  }
);

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
