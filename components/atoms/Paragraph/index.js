import styled from 'styled-components';

const Paragraph = styled.p`
  ${props => props.px && `padding: 0rem ${props.px}rem`};
`;

export default Paragraph;
