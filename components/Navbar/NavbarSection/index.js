import styled from 'styled-components';

const NavbarSection = styled.nav`
  width: 100%;
  background-color: ${props => props.theme.main};
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr;
  z-index: 10;
`;

export default NavbarSection;
