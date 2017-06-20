import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AnimatedBorder from './';

describe('AnimatedBorder', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<AnimatedBorder />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with text color props', () => {
    const wrapper = renderer.create(<AnimatedBorder color={'white'} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders div component', () => {
    const wrapper = shallow(<AnimatedBorder />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
