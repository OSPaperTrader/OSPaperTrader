import { setWatchlist, setPortfolio } from '../Actions/actionCreator';
import { SET_PORTFOLIO, GET_PORTFOLIO } from '../Actions/actionTypes';
import { put, takeLatest, select } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

const repeat = ms => new Promise(res => setInterval(res, ms));

function* getWatchlist() {
  console.log('getWatchlist');
  // const APIKEY = '3UQDU5BEQNBQWB71';
  const state = yield select();
  
  const watchedItems = state.symbolList;
  const list = yield fetch(
    `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&apikey=${APIKEY}&symbols=${watchedItems.join(',')}`
  ).then(response => {
    response.json();
  });
  // yield repeat(20000);

  yield put(setWatchlist(list));
}

function* getPortfolio(action) {
  const state = yield select();
  const portfolio = yield fetch(`http://localhost:8080/api/${state.email}`)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
  yield put(setPortfolio(portfolio));
}

export function* mainSaga() {
  // yield getWatchlist();
  yield takeLatest(GET_PORTFOLIO, getPortfolio);
}
