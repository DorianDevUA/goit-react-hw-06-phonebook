import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/modal/actions';
import { ImUserPlus } from 'react-icons/im';
import Filter from '../Filter';
import Modal from '../Modal';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import { Container, StyledIconBtn } from './App.styled';

const App = () => {
  const { showModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>Phonebook</h1>
      <StyledIconBtn
        type="button"
        onClick={() => dispatch(toggleModal(showModal))}
        aria-label="Add new contact"
      >
        <ImUserPlus />
      </StyledIconBtn>
      <Filter />

      <h2>Contacts</h2>
      <ContactList />

      {showModal && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
    </Container>
  );
};

export default App;
