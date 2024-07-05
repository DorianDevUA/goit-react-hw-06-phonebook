import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getShowModal } from '../../redux/modal/selectors';
import { toggleModal } from '../../redux/modal/actions';
import { Backdrop, ModalContent } from './Modal.styled';

const rootModal = window.document.getElementById('root-modal');

const Modal = ({ children }) => {
  const showModal = useSelector(getShowModal);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        dispatch(toggleModal(showModal));
      }
    };

    window.document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, showModal]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      dispatch(toggleModal(showModal));
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    rootModal,
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
