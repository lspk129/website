import styled from 'styled-components';

const AnimatedBorder = styled.div`
  ${({ color }) => color && `color: ${color}`};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;

  &::after {
    display: block;
    content: '';
    border-bottom: solid 2px ${({ color }) => color};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export default AnimatedBorder;
