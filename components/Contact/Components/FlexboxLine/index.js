import styled from 'styled-components';

const FlexboxLine = styled.div`
  display: flex;
  justify-content: ${props => (props.between ? 'space-between' : '')};
  flex-wrap: wrap;
  align-items: center;
`;

export default FlexboxLine;
