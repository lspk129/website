import React from 'react';

import NavbarSection from '../NavbarSection';
import NavbarImage from './NavbarImage';
import NavbarImageWrapper from './NavbarImageWrapper';

const NavbarLogo = () => (
  <NavbarSection>
    <NavbarImageWrapper>
      <NavbarImage src="../../static/logo_main.png" alt="moka" />
    </NavbarImageWrapper>
  </NavbarSection>
);

export default NavbarLogo;
