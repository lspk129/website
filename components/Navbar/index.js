import React from 'react';
import Scroll from 'react-scroll';
import Sticky from 'react-sticky';
import RaisedButton from 'material-ui/RaisedButton';
import { cyan700 } from 'material-ui/styles/colors';

import NavbarSection from './NavbarSection';
import NavbarList from './NavbarList';
import NavbarItem from './NavbarItem';

const Navbar = () => (
  <Sticky>
    {({ style }) => (
      <NavbarSection style={style}>
        <NavbarList>
          <NavbarItem onClick={() => Scroll.animateScroll.scrollToTop()}>
              HOME
          </NavbarItem>
          <Scroll.Link to="Service" spy smooth duration={500}>
            <NavbarItem>
              SERVICES
            </NavbarItem>
          </Scroll.Link>
          <Scroll.Link to="Technology" spy smooth duration={500}>
            <NavbarItem>
              TECHNOLOGIES
            </NavbarItem>
          </Scroll.Link>
          <RaisedButton
            label="Contact us"
            labelColor={cyan700}
            labelStyle={{ fontSize: '15px' }}
            onClick={() => Scroll.animateScroll.scrollToBottom()}
          />
        </NavbarList>
      </NavbarSection>
        )}
  </Sticky>
);

export default Navbar;
