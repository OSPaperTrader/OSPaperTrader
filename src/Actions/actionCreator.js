import { INCREMENT } from './actionTypes.js';

export const increment = (value) => ({
  type: INCREMENT,
  payload: value,
});
