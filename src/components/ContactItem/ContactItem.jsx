import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/actions';
import { ImPhone, ImUser } from 'react-icons/im';
import { ContactCard } from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

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
      <button type="button" onClick={handleDelete}>
        delete
      </button>
    </ContactCard>
  );
};

export default ContactItem;
