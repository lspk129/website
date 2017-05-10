import styled from 'styled-components';

const Button = styled.button`
  width: 350px;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: #ff6666;
  color: #fff;
  transition: background-color .5s;
  &:hover {
    background-color: #fff;
    color: #ff6666
  };
  padding: 15px 50px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  align-self: start;
  justify-self: center;
`;

export default Button;
