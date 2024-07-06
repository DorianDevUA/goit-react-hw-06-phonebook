export const search = value => {
  return {
    type: 'filter/search',
    payload: value,
  };
};
