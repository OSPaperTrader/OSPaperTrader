import { SET_WATCHLIST } from '../Actions/actionTypes.js';

const initialState = {
  watchlist: {},
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
