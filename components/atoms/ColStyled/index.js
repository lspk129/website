import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';

const ColStyled = styled(Col)`
  ${props => props.align && `
    align-self: ${props.align};
   `}
  ${props => props.color && `
    background-color: ${props.color};
  `}
`;

export default ColStyled;
