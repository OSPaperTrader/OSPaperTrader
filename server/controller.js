const axios = require('axios');
const db = require('./models/stocks-db.js');

const mainController = {};

mainController.sellSecurity = (req, res, next) => {
  const { email } = req.params;
  const toSell = req.params.sell;

  db.query(
    'insert into transactions () values ()',
    (err, result) => {
      if (err) {
        console.log('error', err);
        return next({
          log: err.stack,
          message: 'Error executing query in sell security',
        });
      }
      console.log(result);

      db.query(
        'update into transactions () values ()',
        (err, result) => {
          if (err) {
            console.log('error', err);
            return next({
              log: err.stack,
              message: 'Error executing query in sell security',
            });
          }
          console.log(result);
          return next();
        },
      );

      return next();
    },
  );
};

mainController.buySecurity = (req, res, next) => {
  const { email } = req.params;
  const toBuy = req.params.buy;

  db.query(
    'insert into transactions () values () ',
    (err, result) => {
      if (err) {
        console.log('error', err);
        return next({
          log: err.stack,
          message: 'Error executing query in buy security',
        });
      }
      console.log(result);
      return next();
    },
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
          message: 'Error executing delete query in getData',
        });
      }
      const doNotDelete = result.rows.map((el) => el.symbol);

      // if user has a stock in his portfolio do not delete that stock from the watchlist
      if (!doNotDelete.includes(req.params.delete)) {
        db.query(
          `select watched_symbols from users where email = '${email}'`,
          (err, result) => {
            if (err) {
              return next({
                log: err.stack,
                message: 'Error executing query in getData',
              });
            }
            console.log('to Delete', result.rows);
            res.locals.delete = JSON.parse(result.rows[0].watched_symbols);
            console.log('RES LOCALS DELETE', res.locals.delete);

            res.locals.delete = res.locals.delete.filter(
              (e) => e !== req.params.delete,
            );

            db.query(
              `update users set watched_symbols = '${JSON.stringify(
                res.locals.delete,
              )}' where email = '${email}'`,
              (err, result) => {
                if (err) {
                  console.log('error', err);
                  return next({
                    log: err.stack,
                    message: 'Error executing query in getData',
                  });
                }
                console.log(result);
                return next();
              },
            );
          },
        );
      } else {
        res.locals.delete = 'symbols in portfolio cannot be removed from watchlist';
        return next();
      }
    },
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
          message: 'Error executing query in addWatchlistItem',
        });
      }
      console.log('result.rows in addWatchlist', result.rows);
      const watchlistArr = JSON.parse(result.rows[0].watched_symbols);

      if (!watchlistArr.includes(toAdd)) {
        watchlistArr.push(toAdd);
        db.query(
          `update users set watched_symbols = '${JSON.stringify(
            watchlistArr,
          )}' where email = '${email}'`,
          (err, result) => {
            if (err) {
              return next({
                log: err.stack,
                message: 'Error executing query in addWatchlistItem',
              });
            }
            console.log(
              'symbol added to watch list succesfully, here is the result ',
              result,
            );
            res.locals.data = watchlistArr;
            return next();
          },
        );
      } else {
        res.locals.data = 'symbol already in watchlist';
        return next();
      }
    },
  );
};

mainController.getTransData = async (req, res, next) => await db.query(
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
    db.query(
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
    );
  },
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
