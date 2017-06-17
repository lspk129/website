import styled from 'styled-components';

const Image = styled.img`
  ${props => props.width && `width: ${props.width}rem`}
`;

export default Image;
