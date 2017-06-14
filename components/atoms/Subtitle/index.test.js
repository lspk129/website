import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Subtitle from './';

describe('Subtitle', () => {
  const shallowWrapper = shallow(<Subtitle />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Subtitle />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders h2 tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('h2');
  });
});
