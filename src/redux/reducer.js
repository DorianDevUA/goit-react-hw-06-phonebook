import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/reducer';
import { modalReducer } from './modal/reducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  modal: modalReducer,
});
