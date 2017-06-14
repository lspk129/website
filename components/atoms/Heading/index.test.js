import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Heading from './';

describe('Heading', () => {
  const shallowWrapper = shallow(<Heading />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Heading />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders h3 tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('h3');
  });
});
