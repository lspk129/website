import styled from 'styled-components';

const FlexComponent = styled.div`
  display: flex;
  justify-content: ${props => (props.between ? 'space-between' : '')};
  flex-wrap: wrap;
  align-items: center;
`;

export default FlexComponent;
