import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    search(state, action) {
      state.value = action.payload;
    },
  },
});

// Генератори екшенів
export const { search } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;

//Selectors
export const getFilterValue = state => state.filter.value;
