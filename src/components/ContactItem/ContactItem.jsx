import { ImPhone, ImUser } from 'react-icons/im';
import { ContactCard } from './ContactItem.styled';

const ContactItem = ({ name, number }) => {
  return (
    <ContactCard>
      <ul>
        <li>
          <ImUser />
          <span>{name}</span>
        </li>
        <li>
          <ImPhone />
          <span>{number}</span>
        </li>
      </ul>
      <button type="button">delete</button>
    </ContactCard>
  );
};

export default ContactItem;
