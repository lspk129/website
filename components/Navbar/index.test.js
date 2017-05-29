import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StickyContainer, Sticky } from 'react-sticky';
import Scroll from 'react-scroll';

import { Navbar, NavbarLogo } from './';
import NavbarSection from './NavbarSection';
import NavbarList from './NavbarList';
import NavbarItem from './NavbarItem';

describe('Navbar', () => {
  const deepWrapper = mount(<StickyContainer><Navbar /></StickyContainer>);

  it('renders correctly', () => {
    const tree = toJson(deepWrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders NavbarLogo component', () => {
    const wrapper = shallow(<NavbarLogo />);
    expect(wrapper).toBePresent();
  });

  it('renders Moka Haiku image', () => {
    const wrapper = mount(<NavbarLogo />);
    expect(wrapper.find('img')).toHaveProp('src', '../../static/logo_main.png');
  });

  it('renders NavbarSection component', () => {
    expect(deepWrapper).toBePresent();
    expect(deepWrapper.find(NavbarSection)).toBePresent();
  });

  it('renders NavbarList component', () => {
    expect(deepWrapper.find(NavbarList)).toBePresent();
  });

  it('renders NavbarItem component', () => {
    expect(deepWrapper.find(NavbarItem)).toBePresent();
  });

  it('renders Sticky component', () => {
    expect(deepWrapper.find(Sticky)).toBePresent();
  });

  it('renders Scroll.Link component with link to Services section', () => {
    expect(deepWrapper.find(Scroll.Link)).toBePresent();
    expect(deepWrapper.find(Scroll.Link).at(0)).toHaveProp('to', 'Service');
  });
});
