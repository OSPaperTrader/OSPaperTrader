const db = require('../models/stocks-db.js');

const mainController = {};


mainController.getBTCData = (req, res, next) => {
  db.query('SELECT NOW()', (err, result) => {
    if (err) {
      return ({ log: err.stack, message: 'Error executing query in getData' });
    }
    console.log('result', result.rows);
    res.locals.data = result.rows;
  });
  return next();
};

module.exports = mainController;
