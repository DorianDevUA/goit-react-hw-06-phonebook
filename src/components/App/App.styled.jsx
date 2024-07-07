import styled from 'styled-components';
import IconButton from '../IconButton';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledIconBtn = styled(IconButton)`
  padding: 8px;

  color: white;
  background-color: rgb(76, 175, 80);

  border: none;
  border-radius: 50%;
  cursor: pointer;

  svg {
    display: block;
  }
`;
