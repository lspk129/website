import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StickyContainer, Sticky } from 'react-sticky';

import { Navbar, NavbarLogo } from './';
import NavbarSection from './NavbarSection';
import NavbarList from './NavbarList';
import NavbarItem from './NavbarItem';

describe('Navbar', () => {
  const shallowWrapper = mount(<StickyContainer><Navbar /></StickyContainer>);

  it('renders correctly', () => {
    const tree = toJson(shallowWrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders NavbarLogo', () => {
    const wrapper = shallow(<NavbarLogo />);
    expect(wrapper).toBePresent();
  });

  it('renders Moka Haiku image', () => {
    const wrapper = mount(<NavbarLogo />);
    expect(wrapper.find('img')).toHaveProp('src', '../../static/logo_main.png');
  });

  it('renders NavbarSection', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper.find(NavbarSection)).toBePresent();
  });

  it('renders NavbarList', () => {
    expect(shallowWrapper.find(NavbarList)).toBePresent();
  });

  it('renders NavbarItem', () => {
    expect(shallowWrapper.find(NavbarItem)).toBePresent();
  });

  it('renders Sticky component', () => {
    expect(shallowWrapper.find(Sticky)).toBePresent();
  });
});
