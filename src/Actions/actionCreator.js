import { SET_WATCHLIST, SET_PORTFOLIO, GET_PORTFOLIO, ADD_TO_WATCHLIST } from './actionTypes.js';

export const setWatchlist = payload => ({
  type: SET_WATCHLIST,
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

