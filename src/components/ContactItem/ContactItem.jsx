import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ImPhone, ImUser } from 'react-icons/im';
import { MdOutlineClear } from 'react-icons/md';
import { ContactCard } from './ContactItem.styled';
import { StyledIconBtn } from './ContactItem.styled';

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

      <StyledIconBtn
        type="button"
        onClick={handleDelete}
        aria-label="Delete contact"
      >
        <MdOutlineClear size={24} />
      </StyledIconBtn>
    </ContactCard>
  );
};

export default ContactItem;
