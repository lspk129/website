import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ServiceHeader from './';

describe('ServicesSection', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<ServiceHeader />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders h2 element', () => {
    const wrapper = shallow(<ServiceHeader />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('h2');
  });
});
