import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import NavbarSection from './';

describe('NavbarSection', () => {
  const shallowWrapper = shallow(<NavbarSection />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<NavbarSection />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders nav element', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('nav');
  });
});
