import React from 'react';
// import Link from 'next/link';

import NavbarSection from './NavbarSection';
import NavbarLogo from './NavbarLogo';
import NavbarList from './NavbarList';
import NavbarItem from './NavbarItem';

const Navbar = () => (
  <NavbarSection>
    <NavbarLogo>
      <img src="../../static/logo_main.png" alt="moka" />
    </NavbarLogo>
    <NavbarList>
      <NavbarItem>
        Home
      </NavbarItem>
      <NavbarItem>
        Services
      </NavbarItem>
      <NavbarItem>
        Technologies
      </NavbarItem>
      <NavbarItem>
        Contact us
      </NavbarItem>
    </NavbarList>
  </NavbarSection>
);

export default Navbar;
