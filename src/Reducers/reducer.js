import { SET_WATCHLIST } from '../Actions/actionTypes.js';

const initialState = {
  watchlist: {
    // "Meta Data": {
    //     "1. Information": "Batch Stock Market Quotes",
    //     "2. Notes": "IEX Real-Time",
    //     "3. Time Zone": "US/Eastern"
    // },
    // "Stock Quotes": [
    //     {
    //         "1. symbol": "MSFT",
    //         "2. price": "119.1900",
    //         "3. volume": "10711735",
    //         "4. timestamp": "2019-04-09 14:39:53"
    //     },
    //     {
    //         "1. symbol": "AAPL",
    //         "2. price": "199.9100",
    //         "3. volume": "27681098",
    //         "4. timestamp": "2019-04-09 14:39:56"
    //     },
    //     {
    //         "1. symbol": "FB",
    //         "2. price": "177.1800",
    //         "3. volume": "14088849",
    //         "4. timestamp": "2019-04-09 14:39:50"
    //     }
    // ]
},
  portfolio: {},
  username: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WATCHLIST:
      return {
        ...state,
        watchlist: action.payload
      };
    default:
      return { ...state };
  }
};

export default reducer;
