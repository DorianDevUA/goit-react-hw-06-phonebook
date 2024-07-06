import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { getFilterValue } from '../../redux/filter/selectors';
import ContactItem from '../ContactItem';
import { Contact, StyledList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filtredContacts = getFilteredContacts();

  return (
    <StyledList>
      {filtredContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactItem contact={contact} />
        </Contact>
      ))}
    </StyledList>
  );
};

export default ContactList;
