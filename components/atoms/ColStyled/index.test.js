import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Col } from 'react-styled-flexboxgrid';

import ColStyled from './';

describe('ColStyled', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ColStyled />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(Col)).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with color props', () => {
    const wrapper = shallow(<ColStyled color={'#BADA55'} />);
    expect(wrapper).toHaveProp('color', '#BADA55');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with align props', () => {
    const wrapper = shallow(<ColStyled align={'center'} />);
    expect(wrapper).toHaveProp('align', 'center');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
