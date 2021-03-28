import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('@contacts/addItemRequest');
export const addContactSuccess = createAction('@contacts/addItemSuccess');
export const addContactError = createAction('@contacts/addItemError');

export const deleteContactRequest = createAction('@contacts/deleteItemRequest');
export const deleteContactSuccess = createAction('@contacts/deleteItemSuccess');
export const deleteContactError = createAction('@contacts/deleteItemError');

export const fetchContactsRequest = createAction('@contacts/fetchItemsRequest');
export const fetchContactsSuccess = createAction('@contacts/fetchItemsSuccess');
export const fetchContactsError = createAction('@contacts/fetchItemsError');

export const changeFilter = createAction('@filter/change');
