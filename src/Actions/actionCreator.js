import * as type from './actionTypes.js';

export const INCREMENT = (value) => ({
  type: type.INCREMENT,
  payload: { value },
});
