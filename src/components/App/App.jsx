import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/modal/actions';
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
      <button type="button" onClick={() => dispatch(toggleModal(showModal))}>
        Toggle Modal
      </button>
      <h1>Vite + React + Redux</h1>
      <p>Click on the Vite and React logos to learn more</p>
      <ContactList />
    </>
  );
};

export default App;
