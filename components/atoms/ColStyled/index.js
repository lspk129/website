import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';

const ColStyled = styled(Col)`
  ${props => props.color && `
    background-color: ${props.color};
  `}
`;

export default ColStyled;
