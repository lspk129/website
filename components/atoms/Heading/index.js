import styled from 'styled-components';

const Heading = styled.h3`
  text-align: center;
  text-transform: ${props => (props.upperCase ? 'uppercase' : '')};
`;

export default Heading;
