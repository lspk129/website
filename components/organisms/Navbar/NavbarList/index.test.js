import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import NavbarList from './';

describe('NavbarList', () => {
  const shallowWrapper = shallow(<NavbarList />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<NavbarList />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
