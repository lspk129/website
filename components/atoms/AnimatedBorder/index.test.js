import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AnimatedBorder from './';

describe('AnimatedBorder', () => {
  const shallowWrapper = shallow(<AnimatedBorder />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<AnimatedBorder />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render div tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
