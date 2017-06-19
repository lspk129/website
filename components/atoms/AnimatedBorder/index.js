import styled from 'styled-components';

const AnimatedBorder = styled.div`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  &:after {
    display: grid;
    content: '';
    border-bottom: solid 2px ${({ theme }) => theme.text};  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }

`;

export default AnimatedBorder;
