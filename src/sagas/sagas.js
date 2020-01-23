import { put, takeLatest, select, takeEvery } from 'redux-saga/effects';
import {
  setWatchlist,
  setPortfolio,
  buySecurity,
  getPortfolio,
  addToWatchlist,
  updateWatchlist,
  getWatchlist,
  setSymbolList
} from '../Actions/actionCreator';
import {
  SET_PORTFOLIO,
  GET_PORTFOLIO,
  BUY_SECURITY,
  GET_WATCHLIST,
  ADD_TO_WATCHLIST,
  UPDATE_WATCHLIST,
  SET_SYMBOLLIST
} from '../Actions/actionTypes';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

const repeat = ms => new Promise(res => setInterval(res, ms));

function* getWatchlistSaga() {
  console.log('inside getWatchlistSaga');
  const state = yield select();
  const list = yield fetch(
    `http://localhost:8080/watchlistData/${state.email}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  const updatedList = yield list.json();
  console.log('updatedWatchListSAGA', updatedList);
  const parsedList = yield JSON.parse(updatedList);
  console.log('array is', Array.isArray(parsedList));
  if (Array.isArray(parsedList)) {
    yield put(setSymbolList(parsedList));
  }
}

function* updateWatchlistSaga() {
  console.log('getWatchlist');
  const APIKEY = '3UQDU5BEQNBQWB71';
  const state = yield select();

  const watchedItems = state.symbolList;
  console.log(watchedItems, 'watchedItems');
  const list = yield fetch(
    `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&apikey=${APIKEY}&symbols=${watchedItems.join(
      ','
    )}`
  );
  const response = yield list.json();

  yield put(setWatchlist(response));
}

function* addToWatchlistSaga(action) {
  const state = yield select();
  const list = yield fetch(
    `http://localhost:8080/watchListData/${state.email}/${action.payload}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  const updatedList = yield list.json();
  console.log('updatedWatchListSAGA', updatedList);
  if (Array.isArray(updatedList)) {
    yield put(setWatchlist(updatedList));
  }
}

function* getPortfolioSaga(action) {
  const state = yield select();
  const portfolio = yield fetch(`http://localhost:8080/api/${state.email}`)
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
  yield put(setPortfolio(portfolio));
}

function* buySecuritySaga(action) {
  const state = yield select();
  const fetchBody = JSON.stringify({
    qty: action.payload.qty,
    price: action.payload.price
  });

  console.log('fetchBOdy', fetchBody);
  console.log('symbol', action.payload.symbol);

  const buyFetch = yield fetch(
    `http://localhost:8080/portfolio/buy/${state.email}/${action.payload.symbol}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: fetchBody
    }
  );

  const response = yield buyFetch.json();

  yield put(getPortfolio(state.email));
}

export function* mainSaga() {
  yield takeEvery(UPDATE_WATCHLIST, updateWatchlistSaga);
  yield takeEvery(GET_WATCHLIST, getWatchlistSaga);
  yield takeEvery(ADD_TO_WATCHLIST, addToWatchlistSaga);
  yield takeEvery(GET_PORTFOLIO, getPortfolioSaga);
  yield takeEvery(BUY_SECURITY, buySecuritySaga);
}
