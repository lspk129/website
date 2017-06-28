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

  it('renders with text color props', () => {
    const wrapper = shallow(<Link color={'#BADA55'} />);
    expect(wrapper).toHaveProp('color', '#BADA55');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
