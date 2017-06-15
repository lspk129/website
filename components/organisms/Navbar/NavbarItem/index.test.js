import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import NavbarItem from './';

describe('NavbarItem', () => {
  const shallowWrapper = shallow(<NavbarItem />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<NavbarItem />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
