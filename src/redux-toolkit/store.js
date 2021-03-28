import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// Persist (localStorage)
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Reducers
import authReducer from './auth/authReducers';
import contactsReducer from './contacts/contactsReducers';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
});

const myMiddleware = store => next => action => {
  console.log(action);
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
];

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
