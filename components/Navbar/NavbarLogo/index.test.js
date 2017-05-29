import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import NavbarLogo from './index';
import NavbarImage from './NavbarImage';
import NavbarImageWrapper from './NavbarImageWrapper';

describe('NavbarLogoWrapper', () => {
  const shallowWrapper = mount(<NavbarLogo />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<NavbarLogo />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders NavbarLogo component', () => {
    expect(shallowWrapper).toBePresent();
  });

  it('renders NavbarImage component with image tag', () => {
    expect(shallowWrapper.find(NavbarImage)).toBePresent();
    expect(shallowWrapper.find(NavbarImage)).toHaveTagName('styled.img');
  });

  it('renders NavbarImageWrapper component with anchor tag', () => {
    expect(shallowWrapper.find(NavbarImageWrapper)).toBePresent();
    expect(shallowWrapper.find(NavbarImageWrapper)).toHaveTagName('styled.a');
  });

  it('renders Moka Haiku image', () => {
    expect(shallowWrapper.find('img')).toHaveProp('src', '../../static/logo_main.png');
  });
});
