/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const Button = styled.button`
  text-transform: capitalize;
  font-size: 1.5rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props => props.cart && 'var(--mainYellow)' || ''};
  color: ${props => props.cart && 'var(--mainYellow)' || 'var(--lightBlue)'};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  transition: all 0.2s ease-in-out;
  :hover {
    background: ${props => props.cart && 'var(--mainYellow)' || 'var(--lightBlue)'};
    color: var(--mainBlue);
  }
  :focus {
    outline: none;
  }
`;

export default Button;
