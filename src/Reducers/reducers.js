import * as type from '../Actions/actionTypes.js';

const initialState = {
  value: 0,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.INCREMENT:
      return ({
        ...state, value: action.payload,
      });
    default: return { ...state };
  }
};

export default reducer;
