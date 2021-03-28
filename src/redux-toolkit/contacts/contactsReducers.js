import { combineReducers, createReducer } from '@reduxjs/toolkit';
// Actions
import * as authActions from '../auth/authActions';
import * as contactsActions from './contactsActions';

const itemsInitialState = [];
const items = createReducer(itemsInitialState, {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: (state, action) => [...state, action.payload],
  [contactsActions.deleteContactSuccess]: (state, action) => state.filter(item => item.id !== action.payload),

  [authActions.logoutSuccess]: () => itemsInitialState,
});

const filterInitialState = '';
const filter = createReducer(filterInitialState, {
  [contactsActions.changeFilter]: (state, action) => action.payload,

  [authActions.logoutSuccess]: () => filterInitialState,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const errorInitialState = null;
const error = createReducer(errorInitialState, {
  [contactsActions.fetchContactsError]: (state, action) => action.payload,
  [contactsActions.addContactError]: (state, action) => action.payload,
  [contactsActions.deleteContactError]: (state, action) => action.payload,

  [contactsActions.fetchContactsRequest]: () => errorInitialState,
  [contactsActions.addContactRequest]: () => errorInitialState,
  [contactsActions.deleteContactRequest]: () => errorInitialState,
  [contactsActions.changeFilter]: () => errorInitialState,
});

const contacts = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default contacts;
