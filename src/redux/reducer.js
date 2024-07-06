import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/reducer';
import { modalReducer } from './modal/reducer';
import { filterReducer } from './filter/reducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  modal: modalReducer,
  filter: filterReducer,
});
