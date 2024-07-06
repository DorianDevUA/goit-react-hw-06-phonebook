import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import ContactItem from '../ContactItem';
import { Contact, StyledList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactItem name={name} number={number} />
        </Contact>
      ))}
    </StyledList>
  );
};

export default ContactList;
