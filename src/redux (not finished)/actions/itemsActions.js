import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS } from '../constants';

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts,
});
