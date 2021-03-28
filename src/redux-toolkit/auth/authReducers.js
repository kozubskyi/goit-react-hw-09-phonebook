import { combineReducers, createReducer } from '@reduxjs/toolkit';
// Actions
import * as actions from './authActions';

const initialUserState = { name: '', email: '' };
const user = createReducer(initialUserState, {
  [actions.registerSuccess]: (state, { payload }) => payload.user,
  [actions.loginSuccess]: (state, { payload }) => payload.user,
  [actions.logoutSuccess]: (state, action) => initialUserState,
  [actions.getCurrentUserSuccess]: (state, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.logoutSuccess]: () => false,
  [actions.getCurrentUserSuccess]: () => true,
});

const tokenInitialState = null;
const token = createReducer(tokenInitialState, {
  [actions.registerSuccess]: (state, { payload }) => payload.token,
  [actions.loginSuccess]: (state, { payload }) => payload.token,
  [actions.logoutSuccess]: () => tokenInitialState,
});

const loading = createReducer(false, {
  [actions.registerRequest]: () => true,
  [actions.registerSuccess]: () => false,
  [actions.registerError]: () => false,

  [actions.loginRequest]: () => true,
  [actions.loginSuccess]: () => false,
  [actions.loginError]: () => false,

  [actions.logoutRequest]: () => true,
  [actions.logoutSuccess]: () => false,
  [actions.logoutError]: () => false,

  [actions.getCurrentUserRequest]: () => true,
  [actions.getCurrentUserSuccess]: () => false,
  [actions.getCurrentUserError]: () => false,
});

const error = createReducer(null, {
  [actions.registerError]: (state, { payload }) => payload,
  [actions.loginError]: (state, { payload }) => payload,
  [actions.logoutError]: (state, { payload }) => payload,
  [actions.getCurrentUserError]: (state, { payload }) => payload,
});

const auth = combineReducers({
  user,
  isAuthenticated,
  token,
  loading,
  error,
});

export default auth;
