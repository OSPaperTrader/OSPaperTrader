import { INCREMENT } from '../Actions/actionTypes.js';

const initialState = {
  value: 0,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return ({
        value: state.value + action.payload
      });
    default: return { ...state };
  }
};

export default reducer;
