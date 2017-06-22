import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AnimatedBorder from './';

describe('AnimatedBorder', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AnimatedBorder />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with text color props', () => {
    const wrapper = shallow(<AnimatedBorder color={'#BADA55'} />);
    expect(wrapper).toHaveProp('color', '#BADA55');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

