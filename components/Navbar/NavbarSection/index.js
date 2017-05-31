import styled from 'styled-components';

const NavbarSection = styled.nav`
  width: 100%;
  background-color: ${props => props.theme.main};
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  z-index: 1;
`;

export default NavbarSection;
