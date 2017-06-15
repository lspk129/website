import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Title from './';

describe('HeroTitle', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<Title />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders h1 element', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('h1');
  });
});
