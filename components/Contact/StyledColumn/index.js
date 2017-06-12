import styled from 'styled-components';
import { Column } from 'hedron';

const StyledColumn = styled(Column)`
  background: ${props => props.theme.secondaryBackground};
`;

export default StyledColumn;
