import styled from 'styled-components';

const Subtitle = styled.h2`
  text-align: center;
  text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  color: ${props => (props.white ? props.theme.text : '')}
`;

export default Subtitle;
