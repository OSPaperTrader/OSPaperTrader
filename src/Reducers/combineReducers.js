import { combineReducers } from 'redux';
import Reducer from './reducer.js';
// combine reducers
const rootReducers = combineReducers({
  state: Reducer
});

export default rootReducers;