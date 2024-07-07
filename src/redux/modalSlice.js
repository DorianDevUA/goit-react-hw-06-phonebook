import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
};

export const modalSlice = createSlice({
  // Ім'я слайсу
  name: 'modal',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    toggleModal(state, action) {
      state.showModal = !action.payload;
    },
  },
});

// Генератори екшенів
export const { toggleModal } = modalSlice.actions;
// Редюсер слайсу
export const modalReducer = modalSlice.reducer;

//Selectors
export const getShowModal = state => state.modal.showModal;
