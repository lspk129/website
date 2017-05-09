import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Hero from '../components/Hero';

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<Hero />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Hero component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toBePresent();
  });
});
