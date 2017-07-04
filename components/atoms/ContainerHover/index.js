import styled from 'styled-components';

const ContainerHover = styled.div`
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
  .icons {
    transition: all 0.5s ease-in-out;
    color: ${({ theme }) => theme.background};
  }
  ${({ backgroundColor, theme }) => backgroundColor && `
    &:hover {
      background: ${theme.background};
      color: ${theme.text};
      .icons {
        color: ${theme.text};
      }
    };
  `}
`;

export default ContainerHover;
