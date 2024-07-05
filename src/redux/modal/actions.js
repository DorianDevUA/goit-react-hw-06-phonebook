export const toggleModal = showModal => {
  return {
    type: 'modal/toggleModal',
    payload: showModal,
  };
};
