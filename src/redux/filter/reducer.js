const filterInitialState = {
  value: '',
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/search':
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};
