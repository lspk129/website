import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Link from './';

describe('Link', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Link />);
    expect(shallow(<Link />)).toBePresent();
    expect(shallow(<Link />)).toHaveTagName('a');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with href props', () => {
    const wrapper = shallow(<Link href="http://www.delfi.lt" />);
    expect(wrapper).toHaveProp('href', 'http://www.delfi.lt');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
