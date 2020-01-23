const axios = require('axios');
const db = require('./models/stocks-db.js');

const mainController = {};

mainController.sellSecurity = (req, res, next) => {
  const email = req.params.email;
  const symbol = req.params.symbol;
  const qty = req.body.qty;
  const price = req.body.price;
  const transId = req.body.transId;

  // console.log('emailSell ', email);
  // console.log('symbol ', symbol);
  // console.log('sellQty ', qty);
  // console.log('sellPrice ', price);
  // console.log('transId ', transId);

  db.query(
    `update transactions set trade_is_open = false where trans_id = ${transId}`,
    (err, result) => {
      if (err) {
        console.log('error', err);
        return next({
          log: err.stack,
          message: 'Error executing query in sell security'
        });
      }

      db.query(
        `update users set cash = cash + ${qty *
          price} where email = '${email}'`,
        (err, result) => {
          if (err) {
            console.log('error', err);
            return next({
              log: err.stack,
              message: 'Error executing query in sell security'
            });
          }
          // console.log(result);
          return next();
        }
      );

      return next();
    }
  );
};

mainController.buySecurity = (req, res, next) => {
  const email = req.params.email;
  const symbol = req.params.symbol;
  const qty = parseInt(req.body.qty);
  const price = parseFloat(req.body.price);

  // console.log('emailBuy ', email);
  // console.log('symbol ', symbol);
  // console.log('buyQty ', qty);
  // console.log('buyPrice ', price);

  db.query(
    `insert into transactions (user_id, symbol, purchased_price, qty_purchased) values ((select id from users where email = '${email}'), '${symbol}', ${price}, ${qty}) `,
    (err, result) => {
      if (err) {
        console.log('error', err);
        return next({
          log: err.stack,
          message: 'Error executing query in buy security'
        });
      } else {
        db.query(
          `update users set cash = cash - ${qty *
            price} where email = '${email}'`,
          (err, result) => {
            if (err) {
              console.log('error', err);
              return next({
                log: err.stack,
                message: 'Error updating cash when selling security'
              });
            }
            res.locals.data = `succesfully purchased ${qty} ${symbol} at ${price}`;
            return next();
          }
        );
      }
    }
  );
};

mainController.deleteWatchlistItem = (req, res, next) => {
  const { email } = req.params;

  db.query(
    `select symbol from transactions where user_id = (select id from users where email = '${req.params.email}')`,
    (err, result) => {
      if (err) {
        return next({
          log: err.stack,
          message: 'Error executing delete query in getData'
        });
      }
      const doNotDelete = result.rows.map(el => el.symbol);

      // if user has a stock in his portfolio do not delete that stock from the watchlist
      if (!doNotDelete.includes(req.params.delete)) {
        db.query(
          `select watched_symbols from users where email = '${email}'`,
          (err, result) => {
            if (err) {
              return next({
                log: err.stack,
                message: 'Error executing query in getData'
              });
            }
            // console.log('to Delete', result.rows);
            res.locals.delete = JSON.parse(result.rows[0].watched_symbols);
            // console.log('RES LOCALS DELETE', res.locals.delete);

            res.locals.delete = res.locals.delete.filter(
              e => e !== req.params.delete
            );

            db.query(
              `update users set watched_symbols = '${JSON.stringify(
                res.locals.delete
              )}' where email = '${email}'`,
              (err, result) => {
                if (err) {
                  console.log('error', err);
                  return next({
                    log: err.stack,
                    message: 'Error executing query in getData'
                  });
                }
                // console.log(result);
                return next();
              }
            );
          }
        );
      } else {
        res.locals.delete =
          'symbols in portfolio cannot be removed from watchlist';
        return next();
      }
    }
  );

  // ${JSON.stringify(req.locals.delete)}

  // update users set watched_symbols = '["MSFT", "FB"]' where email = 'user1@gmail.com'
};

mainController.addWatchlistItem = (req, res, next) => {
  const toAdd = req.params.symbol;
  const { email } = req.params;
  db.query(
    `select watched_symbols from users where email = '${email}'`,
    (err, result) => {
      if (err) {
        return next({
          log: err.stack,
          message: 'Error executing query in addWatchlistItem'
        });
      }
      // console.log('result.rows in addWatchlist', result.rows);
      const watchlistArr = JSON.parse(result.rows[0].watched_symbols);

      if (!watchlistArr.includes(toAdd)) {
        watchlistArr.push(toAdd);
        db.query(
          `update users set watched_symbols = '${JSON.stringify(
            watchlistArr
          )}' where email = '${email}'`,
          (err, result) => {
            if (err) {
              return next({
                log: err.stack,
                message: 'Error executing query in addWatchlistItem'
              });
            }
            // console.log(
            //   'symbol added to watch list succesfully, here is the result ',
            //   result
            // );
            res.locals.data = watchlistArr;
            return next();
          }
        );
      } else {
        res.locals.data = 'symbol already in watchlist';
        return next();
      }
    }
  );
};

mainController.getTransData = async (req, res, next) =>
  await db.query(
    `select cash from users where email = '${req.params.email}'`,
    (err, result) => {
      if (err) {
        return next({
          log: err.stack,
          message: 'Error executing query in getData'
        });
      }
      // console.log('CASH', result.rows[0].cash);
      res.locals.cash = result.rows[0];
      db.query(
        `select * from transactions where user_id = (select id from users where email = '${req.params.email}') and trade_is_open = true`,
        (err, result) => {
          if (err) {
            return next({
              log: err.stack,
              message: 'Error executing query in getData'
            });
          }
          // console.log('TRANS DATA', result.rows);
          res.locals.data = result.rows;
          return next();
        }
      );
    }
  );

mainController.getWatchListData = (req, res, next) => {
  db.query(
    `select watched_symbols from users where email = '${req.params.email}'`,
    (err, result) => {
      if (err) {
        return next({
          log: err.stack,
          message: 'Error executing query in getWatchlistData'
        });
      } else {
        console.log('WATCHLISTDATA: ', result.rows);
        res.locals.data = result.rows[0].watched_symbols;
        return next();
      }
    }
  );
};

module.exports = mainController;
