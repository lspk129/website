import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  text-decoration: none;
  color: inherit;
  ${({ href, theme }) => href && `
    cursor: pointer;
    &:hover {
      color: ${theme.main};
    };
  `}
`;

export default Link;
