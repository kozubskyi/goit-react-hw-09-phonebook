import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from '../constants';

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerError = () => ({
  type: REGISTER_ERROR,
});
