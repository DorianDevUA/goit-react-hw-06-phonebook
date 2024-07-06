import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/modal/actions';
import Filter from '../Filter';
import Modal from '../Modal';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

const App = () => {
  const { showModal } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  return (
    <>
      {showModal && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
      <Filter />
      <button type="button" onClick={() => dispatch(toggleModal(showModal))}>
        Toggle Modal
      </button>
      <ContactList />
    </>
  );
};

export default App;
