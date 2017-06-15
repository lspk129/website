import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Division from './';

describe('Division', () => {
  const shallowWrapper = shallow(<Division />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Division />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
