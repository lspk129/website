import styled from 'styled-components';

const DivisionHover = styled.div`
  transition: all 0.5s ease-in-out;
  ${({ height }) => height && `height: ${height}px`};
  ${({ scale }) => scale && `
    img {
      width: 200px;
      height: 200px;
    }
    &:hover {
      transform: scale(1.1);
  }

  `}
  ${({ bgcolor, theme }) => bgcolor && `
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
