import { combineReducers } from 'redux';
import Reducers from './reducers.js';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  state: Reducers,
  // thunks,
});

// make the combined reducers available for import
export default reducers;
