import { setWatchlist } from '../Actions/actionCreator';
import { put } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

const repeat = ms => new Promise(res => setInterval(res, ms));

export function* getWatchlist() {
  console.log('getWatchlist');
  const watchedItems = ['BTC', 'ETH', 'DOGE'];
  const list = [];
  // yield repeat(20000);
  const btc = yield fetch(
    'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=usd&apikey=8K5Q5R03P17L0XSN'
  ).then(response => response.json());
  const eth = yield fetch(
    'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=usd&apikey=8K5Q5R03P17L0XSN'
  ).then(response => response.json());
  list.push(btc, eth);
  yield put(setWatchlist(list));
}
