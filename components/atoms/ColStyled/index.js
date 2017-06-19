import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';

const ColStyled = styled(Col)`
  ${({ align }) => align && `
    align-self: ${align};
  `}
  ${({ color }) => color && `
    background-color: ${color};
  `}
`;

export default ColStyled;
