const db = require("../models/stocks-db.js");
const axios = require('axios');

const mainController = {};

mainController.getBTCData = (req, res, next) => {
  db.query("SELECT NOW()", (err, result) => {
    if (err) {
      return { log: err.stack, message: "Error executing query in getData" };
    }
    console.log("result", result.rows);
    res.locals.data = result.rows;
  });
  return next();
};

mainController.getWatchListData = (req, res, next) => {
  axios
    .get(
      "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=usd&apikey=KJTQNJ09H67J43MU"
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
