import axios from 'axios';
import * as authActions from './authActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set: token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  unset: () => (axios.defaults.headers.common.Authorization = ''),
};

// POST @ /users/signup
// body (credentials): { name, email, password }
// После успешной регистрации добавляем токен в HTTP-заголовок
export const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/users/signup', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registerSuccess(data));
    })
    .catch(error => dispatch(authActions.registerError(error.message)));
};

// POST @ /users/login
// body (credentials): { email, password }
// После успешного логина добавляем токен в HTTP-заголовок
export const login = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/users/login', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(error => dispatch(authActions.loginError(error.message)));
};

// POST @ /users/logout
// headers: { Authorization: `Bearer ${token}` }
// После успешного логаута удаляем токен из HTTP-заголовка
export const logout = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error.message)));
};

// GET @ /users/current
// headers: { Authorization: `Bearer ${token}` }
// 1. Забираем токен из стейта через getState()
// 2. Если токена нет, выходим, не выполняя никаких операций
// 3. Если токен есть, добавляем его в HTTP-заголовок и выполняем операцию
export const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (persistedToken) {
    token.set(persistedToken);

    dispatch(authActions.getCurrentUserRequest());

    axios
      .get('/users/current')
      .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
      .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
  }
};
