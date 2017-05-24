import styled from 'styled-components';

const TehcnologyItem = styled.div`
  transition: all 0.5s ease-in-out;
  display: grid;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    align-self: center;
    justify-self: center;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export default TehcnologyItem;
