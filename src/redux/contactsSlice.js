import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  {
    id: 'SEmJglSCcD26aL6Wo6Np-',
    name: 'Jack Daniels',
    number: '+38 (069)969-69-69',
  },
  {
    id: 'm7hZLcgAvb-5hG-g6whI3',
    name: 'Rosie Simpson',
    number: '+38 (068)101-01-01',
  },
  {
    id: '7IMoxuo-ISYUwdaXxFHvk',
    name: 'Peter Simson',
    number: '+38 (044)945-48-22',
  },
  {
    id: 'Asz9_moYdXSsmRS62u7_k',
    name: 'Alexander Pistorius',
    number: '+38 (073)211-32-32',
  },
  {
    id: 'l_AlroGZ5LG9mYwZgax8e',
    name: 'Alisia Newman',
    number: '+38 (055)550-50-50',
  },
  {
    id: 'l6jwH0NoEu753MKhgDitu',
    name: 'Hermione Kline',
    number: '+38 (099)911-10-10',
  },
  {
    id: 'XuBe4nSbEYv0n8GbYMp-5',
    name: 'Julia Roberts',
    number: '+38 (066)211-77-22',
  },
  {
    id: '1VgzRnKkNcPPQd-wn148w',
    name: 'Dorian Devua',
    number: '+38 (099)431-80-26',
  },
  {
    id: 'mJEc4stnoa3KHwwNGLBof',
    name: 'Jack Sparrow',
    number: '+38 (096)810-10-88',
  },
];

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push({
          id: nanoid(),
          name: action.payload.name,
          number: action.payload.number,
        });
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

//Selectors
export const getContacts = state => state.contacts;
