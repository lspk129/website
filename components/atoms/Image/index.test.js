import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Image from './';

describe('Image', () => {
  const shallowWrapper = shallow(<Image />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Image />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders img tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('img');
  });
});
