import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Text from './';

describe('Text', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Text />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveProp('tag', 'span');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with tag prop h1', () => {
    const wrapper = shallow(<Text tag={'h1'} />);
    expect(wrapper).toHaveProp('tag', 'h1');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with hero boolean props', () => {
    const wrapper = shallow(<Text hero />);
    expect(wrapper).toHaveProp('hero', true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with upperCase props', () => {
    const wrapper = shallow(<Text upperCase />);
    expect(wrapper).toHaveProp('upperCase', true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
