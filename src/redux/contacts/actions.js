export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: { name, number },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};
