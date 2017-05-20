import styled from 'styled-components';

const ServiceItem = styled.div`
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    .material-icons {
      color: ${props => props.theme.text};
    }
  };
  .material-icons {
    transition: all 0.5s ease-in-out;
    font-size: 48px;
    padding: 20px ;
    color: ${props => props.theme.background};
  }
  p {
    padding: 10px 50px;
  }
`;

export default ServiceItem;