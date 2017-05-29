import React from 'react';
import Scroll from 'react-scroll';
import Sticky from 'react-sticky';

import NavbarSection from './NavbarSection';
import { NavbarImageWrapper, NavbarImage } from './NavbarLogo';
import NavbarList from './NavbarList';
import NavbarItem from './NavbarItem';

export const NavbarLogo = () => (
  <NavbarSection>
    <NavbarImageWrapper>
      <NavbarImage src="../../static/logo_main.png" alt="moka" />
    </NavbarImageWrapper>
  </NavbarSection>
);

export const Navbar = () => (
  <Sticky>
    {({ style }) => (
      <NavbarSection style={style}>
        <NavbarList>
          <NavbarItem onClick={() => Scroll.animateScroll.scrollToTop()}>
              Home
          </NavbarItem>
          <Scroll.Link to="Service" spy smooth duration={500}>
            <NavbarItem>
              Services
            </NavbarItem>
          </Scroll.Link>
          <Scroll.Link to="Technology" spy smooth duration={500}>
            <NavbarItem>
              Technologies
            </NavbarItem>
          </Scroll.Link>
          <NavbarItem onClick={() => Scroll.animateScroll.scrollToBottom()}>
            Contact us
          </NavbarItem>
        </NavbarList>
      </NavbarSection>
        )}
  </Sticky>
);
