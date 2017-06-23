import styled from 'styled-components';

const Image = styled.img`
  ${({ width }) => width && `width: ${width}px`}
`;

export default Image;
