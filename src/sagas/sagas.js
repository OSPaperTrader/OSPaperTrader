import { setWatchlist } from '../Actions/actionCreator';
import { put } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

const repeat = ms => new Promise(res => setInterval(res, ms));

export function* getWatchlist() {
  console.log('getWatchlist');
  // const watchedItems = ['BTC', 'ETH', 'DOGE'];
  // const APIKEY = '3UQDU5BEQNBQWB71'

  const list = yield fetch(
    `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&apikey=${APIKEY}&symbols=MSFT,AAPL,FB`
  ).then(response => response.json());
  // yield repeat(20000);

  yield put(setWatchlist(list));
}
