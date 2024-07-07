import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/reducer';
import { modalReducer } from './modal/reducer';
import { filterReducer } from './filter/reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  modal: modalReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
