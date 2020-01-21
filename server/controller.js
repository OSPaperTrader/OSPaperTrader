const db = require("../models/stocks-db.js");
const axios = require("axios");

const mainController = {};

mainController.getCCData = (req, res, next) => {
  db.query(
    `select * from portfolio where user_id = (select id from users where login = '${req.params.username}')`,
    (err, result) => {
      if (err) {
        return next({
          log: err.stack,
          message: "Error executing query in getData"
        });
      }
      console.log("result.rows", result.rows);
      res.locals.data = result.rows;
      return next();
    }
  );
};

mainController.getWatchListData = (req, res, next) => {
  axios
    .get(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${req.params.id}&to_currency=usd&apikey=KJTQNJ09H67J43MU`
    )
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = mainController;
