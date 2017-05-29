import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { NavbarImageWrapper, NavbarImage } from './';

describe('NavbarLogoWrapper', () => {
  const shallowWrapper = shallow(<NavbarImageWrapper />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<NavbarImageWrapper />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders anchor tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('a');
  });
});

describe('NavbarImage', () => {
  const shallowWrapper = shallow(<NavbarImage />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<NavbarImage />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders image tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('img');
  });
});
