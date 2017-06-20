import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Image from './';

describe('Image', () => {
  const shallowWrapper = shallow(<Image />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Image />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with width props', () => {
    const wrapper = renderer.create(<Image width={200} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders img tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('img');
  });
});
