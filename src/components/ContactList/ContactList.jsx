import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import ContactItem from '../ContactItem';
import { Contact, StyledList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <StyledList>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          <ContactItem contact={contact} />
        </Contact>
      ))}
    </StyledList>
  );
};

export default ContactList;
