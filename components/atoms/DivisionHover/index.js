import styled from 'styled-components';

const DivisionHover = styled.div`
  transition: all 0.5s ease-in-out;
  height: 260px;

  &:hover {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    .icons {
      color: ${props => props.theme.text};
    }
  };

  .icons {
    transition: all 0.5s ease-in-out;
    color: ${props => props.theme.background};
  }
`;

export default DivisionHover;
