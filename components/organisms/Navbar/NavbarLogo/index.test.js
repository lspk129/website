import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import NavbarLogo from './index';
import Image from './Image';

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

  it('renders Image component with image tag', () => {
    expect(shallowWrapper.find(Image)).toBePresent();
    expect(shallowWrapper.find(Image)).toHaveTagName('styled.img');
  });

  it('renders Moka Haiku image', () => {
    expect(shallowWrapper.find('img')).toHaveProp('src', '/static/MokaHaiku_main.png');
  });
});
