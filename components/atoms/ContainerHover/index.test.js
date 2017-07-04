import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ContainerHover from './';

describe('ContainerHover', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContainerHover />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders scale boolean props', () => {
    const wrapper = shallow(<ContainerHover scale={2} />);
    expect(wrapper).toHaveProp('scale', 2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders background color boolean props with theme props', () => {
    const wrapper = shallow(<ContainerHover backgroundColor />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
