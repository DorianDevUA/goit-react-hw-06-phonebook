import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from '../../redux/contactsSlice';
import { getShowModal, toggleModal } from '../../redux/modalSlice';
import { Field, Formik } from 'formik';
import FormError from '../FormError';
import * as Yup from 'yup';
import {
  Buttons,
  AddContactBtn,
  CancelBtn,
  LabelTitle,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const phoneRegExp =
  /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(32, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const showModal = useSelector(getShowModal);
  const dispatch = useDispatch();

  const nameImputId = nanoid();
  const numberImputId = nanoid();

  const checkNameInContacts = name => {
    const normalizedName = name.toLowerCase();

    return contacts.some(({ name }) => name.toLowerCase() === normalizedName);
  };

  const handleSubmit = (values, actions) => {
    console.log('values', values);
    console.log('actions', actions);

    const { name, number } = values;
    const { resetForm } = actions;

    const isNameExist = checkNameInContacts(name);

    if (isNameExist) {
      alert(`Контакт "${name}" вже існує!`);
      return;
    }

    dispatch(addContact(name, number));
    resetForm();
    dispatch(toggleModal(showModal));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledLabel htmlFor={nameImputId}>
          <LabelTitle>Name</LabelTitle>
          <Field type="text" name="name" id={nameImputId} />
          <FormError name="name" />
        </StyledLabel>

        <StyledLabel htmlFor={numberImputId}>
          <LabelTitle>Number</LabelTitle>
          <Field type="tel" name="number" id={numberImputId} />
          <FormError name="number" />
        </StyledLabel>

        <Buttons>
          <AddContactBtn type="submit">Add contact</AddContactBtn>
          <CancelBtn
            type="button"
            onClick={() => dispatch(toggleModal(showModal))}
          >
            Cancel
          </CancelBtn>
        </Buttons>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
