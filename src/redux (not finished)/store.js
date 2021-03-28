import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Reducers
import name from './reducers/authReducer/userReducer/nameReducer';
import email from './reducers/authReducer/userReducer/emailReducer';
import isAuthenticated from './reducers/authReducer/isAuthenticatedReducer';
import token from './reducers/authReducer/tokenReducer';
import authLoading from './reducers/authReducer/loadingReducer';
import authError from './reducers/authReducer/errorReducer';
import items from './reducers/contactsReducer/itemsReducer';
import filter from './reducers/contactsReducer/filterReducer';
import contactsLoading from './reducers/contactsReducer/loadingReducer';
import contactsError from './reducers/contactsReducer/errorReducer';

const rootReducer = combineReducers({
  auth: combineReducers({
    user: combineReducers({
      name,
      email,
    }),
    isAuthenticated,
    token,
    loading: authLoading,
    error: authError,
  }),
  contacts: combineReducers({
    items,
    filter,
    loading: contactsLoading,
    error: contactsError,
  }),
});

const middleware = [];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
