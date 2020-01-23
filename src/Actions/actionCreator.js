import {
  SET_WATCHLIST,
  SET_PORTFOLIO,
  GET_PORTFOLIO,
  ADD_TO_WATCHLIST,
  BUY_SECURITY,
  GET_WATCHLIST,
  UPDATE_WATCHLIST,
  SET_SYMBOLLIST
} from './actionTypes.js';

export const setWatchlist = payload => ({
  type: SET_WATCHLIST,
  payload: payload
});

export const updateWatchlist = payload => ({
  type: UPDATE_WATCHLIST,
  payload: payload
});

export const setSymbolList = payload => ({
  type: SET_SYMBOLLIST,
  payload: payload
});

export const setPortfolio = payload => ({
  type: SET_PORTFOLIO,
  payload: payload
});

export const getPortfolio = payload => ({
  type: GET_PORTFOLIO,
  payload: payload
});

export const addToWatchlist = payload => ({
  type: ADD_TO_WATCHLIST,
  payload: payload
});

export const getWatchlist = payload => ({
  type: GET_WATCHLIST,
  payload: payload
});

export const buySecurity = payload => ({
  type: BUY_SECURITY,
  payload: payload
});
