import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getShowModal } from '../../redux/modal/selectors';
import { toggleModal } from '../../redux/modal/actions';
import { addContact } from '../../redux/contacts/actions';
import { Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  AddContactBtn,
  LabelTitle,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const phoneRegExp =
  /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(16).required(),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

const ContactForm = () => {
  const showModal = useSelector(getShowModal);
  const dispatch = useDispatch();

  const nameImputId = nanoid();
  const numberImputId = nanoid();

  const handleSubmit = (values, actions) => {
    console.log('values', values);
    console.log('actions', actions);

    const { name, number } = values;
    const { resetForm } = actions;

    resetForm();

    dispatch(addContact(name, number));
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
          <ErrorMessage component="div" name="name" />
        </StyledLabel>

        <StyledLabel htmlFor={numberImputId}>
          <LabelTitle>Number</LabelTitle>
          <Field type="tel" name="number" id={numberImputId} />
          <ErrorMessage component="div" name="number" />
        </StyledLabel>

        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
