import styled from 'styled-components';

const Paragraph = styled.p`
  ${({ px }) => px && `padding: 0rem ${px}rem`};
`;

export default Paragraph;
