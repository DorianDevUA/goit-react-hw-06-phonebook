import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: grid;
  justify-items: center;
  padding: 4px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const StyledLabel = styled.label`
  display: block;
`;

export const LabelTitle = styled.span`
  display: block;
`;

export const AddContactBtn = styled.button`
  padding: 4px;
  margin-top: 4px;
  color: white;
  background-color: rgb(76, 175, 80);
  border: none;
  border-radius: 2px;
`;