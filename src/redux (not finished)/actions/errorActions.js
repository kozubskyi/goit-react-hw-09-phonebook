import { SET_ERROR, RESET_ERROR } from '../constants/formConstants';

const setError = text => ({
  type: SET_ERROR,
  payload: text,
});

const resetError = () => ({
  type: RESET_ERROR,
});

export { setError, resetError };
