import {
  SET_WATCHLIST,
  SET_PORTFOLIO,
  GET_PORTFOLIO,
  ADD_TO_WATCHLIST,
  BUY_SECURITY,
  GET_WATCHLIST,
  SET_SYMBOLLIST
} from '../Actions/actionTypes.js';

const initialState = {
  watchlist: {
    'Meta Data': {
      '1. Information': 'Batch Stock Market Quotes',
      '2. Notes': 'IEX Real-Time',
      '3. Time Zone': 'US/Eastern'
    },
    'Stock Quotes': [
      {
        '1. symbol': 'MSFT',
        '2. price': '166.4550',
        '3. volume': '7475901',
        '4. timestamp': '2020-01-22 11:31:22'
      },
      {
        '1. symbol': 'AAPL',
        '2. price': '318.3800',
        '3. volume': '9260215',
        '4. timestamp': '2020-01-22 11:30:51'
      },
      {
        '1. symbol': 'FB',
        '2. price': '221.8700',
        '3. volume': '5495525',
        '4. timestamp': '2020-01-22 11:26:17'
      }
    ]
  },
  portfolio: {
    transactions: []
  },
  email: 'user1@gmail.com',
  cash: 10000,
  symbolList: ['MSFT', 'AAPL', 'FB']
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WATCHLIST:
      return {
        ...state
      };
    case SET_SYMBOLLIST:
      return {
        ...state,
        symbolList: action.payload
      };
    case ADD_TO_WATCHLIST:
      console.log('this is action ', action.payload);
      const symbolList = state.symbolList.slice();
      if (typeof action.payload === 'string') {
        symbolList.push(action.payload);
      }
      return {
        ...state,
        symbolList
      };
    case SET_WATCHLIST:
      console.log('inside of set watchlist', action.payload);
      return {
        ...state,
        watchlist: action.payload
      };
    case SET_PORTFOLIO:
      return {
        ...state,
        portfolio: {
          transactions: action.payload.transactions
        },
        cash: action.payload.cash.cash
      };
    case GET_PORTFOLIO:
      return {
        ...state
      };
    case BUY_SECURITY:
      return {
        ...state
      };
    default:
      return { ...state };
  }
};

export default reducer;
