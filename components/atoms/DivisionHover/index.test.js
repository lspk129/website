import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import DivisionHover from './';

describe('DivisionHover', () => {
  const shallowWrapper = shallow(<DivisionHover />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<DivisionHover />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
