import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  color: ${({ color }) => color || 'inherit'};
  &:hover {
    color: ${({ theme }) => theme.main};
  }
`;

export default Link;
