import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import Sticky from 'react-sticky';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

import NavbarSection from './NavbarSection';
import NavbarList from './NavbarList';
import NavbarItem from './NavbarItem';

const Navbar = props => (
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
            labelColor={props.muiTheme.palette.accent1Color}
            labelStyle={{ fontSize: '15px' }}
            onClick={() => Scroll.animateScroll.scrollToBottom()}
          />
        </NavbarList>
      </NavbarSection>
        )}
  </Sticky>
);

Navbar.propTypes = {
  muiTheme: PropTypes.shape({
    palette: PropTypes.object,
    accent1Color: PropTypes.string,
  }).isRequired,
};

export default muiThemeable()(Navbar);
