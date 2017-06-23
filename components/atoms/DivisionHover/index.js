import styled from 'styled-components';

const DivisionHover = styled.div`
  transition: all 0.5s ease-in-out;
  ${({ scale }) => scale && `
    img {
      width: 200px;
      height: 200px;
    }
    &:hover {
      transform: scale(${scale});
    }
  `}
  ${({ backgroundColor, theme }) => backgroundColor && `
    &:hover {
      background: ${theme.background};
      color: ${theme.text};
      .icons {
        color: ${theme.text};
      }
    };
    .icons {
      transition: all 0.5s ease-in-out;
      color: ${theme.background};
    }
  `}
`;

export default DivisionHover;
