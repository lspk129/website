import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StickyContainer, Sticky } from 'react-sticky';
import Scroll from 'react-scroll';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Navbar from './';
import NavbarSection from './NavbarSection';
import NavbarList from './NavbarList';
import NavbarItem from './NavbarItem';

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

describe('Navbar', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object.isRequired },
  });
  const mountWrapper = mountWithContext(<StickyContainer><Navbar /></StickyContainer>);

  it('renders correctly', () => {
    const tree = toJson(mountWrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders Navbar component', () => {
    expect(mountWrapper).toBePresent();
  });

  it('renders NavbarSection component', () => {
    expect(mountWrapper.find(NavbarSection)).toBePresent();
  });

  it('renders NavbarList component', () => {
    expect(mountWrapper.find(NavbarList)).toBePresent();
  });

  it('renders NavbarItem component', () => {
    expect(mountWrapper.find(NavbarItem)).toBePresent();
  });

  it('renders Sticky component', () => {
    expect(mountWrapper.find(Sticky)).toBePresent();
  });

  it('renders Scroll.Link component with link to Services section', () => {
    expect(mountWrapper.find(Scroll.Link)).toBePresent();
    expect(mountWrapper.find(Scroll.Link).at(0)).toHaveProp('to', 'Service');
  });

  it('renders Scroll.Link component with link to Technologies section', () => {
    expect(mountWrapper.find(Scroll.Link).at(1)).toHaveProp('to', 'Technology');
  });

  it('renders RaisedButton component', () => {
    expect(mountWrapper.find(RaisedButton)).toBePresent();
    expect(mountWrapper.find(RaisedButton)).toHaveProp('label', 'Contact us');
  });
});
