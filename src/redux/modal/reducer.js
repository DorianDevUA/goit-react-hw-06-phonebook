const modalInicialState = {
  showModal: false,
};

export const modalReducer = (state = modalInicialState, action) => {
  switch (action.type) {
    case 'modal/toggleModal':
      return {
        ...state,
        showModal: !action.payload,
      };
  }
  return state;
};
