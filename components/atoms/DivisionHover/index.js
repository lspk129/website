import styled from 'styled-components';

const DivisionHover = styled.div`
  transition: all 0.5s ease-in-out;
  ${props => props.height && `height: ${props.height}px`};
  ${props => props.scale && `
    img {
      width: 200px;
      height: 200px;
    }
    &:hover {
    transform: scale(1.1);
  }

  `}
  ${props => props.bgcolor && `
    &:hover {
      background: ${props.theme.background};
      color: ${props.theme.text};
      .icons {
        color: ${props.theme.text};
      }
    };
    .icons {
      transition: all 0.5s ease-in-out;
      color: ${props.theme.background};
    }
  `}
`;

export default DivisionHover;
