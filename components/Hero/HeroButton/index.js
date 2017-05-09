import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: block;
  margin: 30px auto;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: #ff6666;
  color: #fff;
  transition: background-color .3s;
  &:hover {
    background-color: #fff;
    color: #ff6666
  };
  padding: 15px 50px;
  top: 65%;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export default Button;
