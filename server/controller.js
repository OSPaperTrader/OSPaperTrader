const axios = require('axios');
const db = require('./models/stocks-db.js');

const mainController = {};

mainController.deleteWatchlistItem = (req, res, next) => {
  const toDelete = req.params.delete

  db.query(
    `select cash from users where email = '${req.params.delete}'`,
    (err, result) => {
      if (err) {
        return next({
          log: err.stack,
          message: 'Error executing query in getData',
        });
      }
      console.log('to Delete', result.rows);
      res.locals.delete = result.rows;
    },
  ),
}

mainController.addWatchlistItem = (req, res, next) => {
  const toAdd = req.params.add

  db.query(
    `select cash from users where email = '${req.params.delete}'`,
    (err, result) => {
      if (err) {
        return next({
          log: err.stack,
          message: 'Error executing query in getData',
        });
      }
      console.log('to Add', result.rows);
      res.locals.add = result.rows;
    },
  ),
}

mainController.getTransData = async (req, res, next) => Promise.all(
  await db.query(
    `select cash from users where email = '${req.params.email}'`,
    (err, result) => {
      if (err) {
        return next({
          log: err.stack,
          message: 'Error executing query in getData',
        });
      }
      console.log('CASH', result.rows[0].cash);
      res.locals.cash = result.rows[0];
    },
  ),

  await db.query(
    `select * from transactions where user_id = (select id from users where email = '${req.params.email}')`,
    (err, result) => {
      if (err) {
        return next({
          log: err.stack,
          message: 'Error executing query in getData',
        });
      }
      console.log('TRANS DATA', result.rows);
      res.locals.data = result.rows;
      return next();
    },
  ),
);

mainController.getWatchListData = (req, res, next) => {
  axios
    .get(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${req.params.id}&to_currency=usd&apikey=KJTQNJ09H67J43MU`,
    )
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = mainController;
