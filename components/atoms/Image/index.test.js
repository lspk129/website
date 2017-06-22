import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Image from './';

describe('Image', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Image />);
    expect(shallow(<Image />)).toBePresent();
    expect(shallow(<Image />)).toHaveTagName('img');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with width props', () => {
    const wrapper = shallow(<Image width={300} />);
    expect(wrapper).toHaveProp('width', 300);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
