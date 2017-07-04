import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Card from './';
import Container from '../../atoms/Container';
import Text from '../../atoms/Text';

describe('Card', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with image props', () => {
    const wrapper = mount(<Card image={<img src={'../../../static/React_logo.png'} alt={'React'} />} />);
    expect(wrapper).toHaveProp('image');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with label props', () => {
    const wrapper = mount(<Card label={'test label'} />);
    expect(wrapper).toHaveProp('label', 'test label');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with text props', () => {
    const wrapper = mount(<Card text={'testing text'} />);
    expect(wrapper).toHaveProp('text', 'testing text');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Container component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(Container)).toBePresent();
  });

  it('renders Text component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(Text)).toBePresent();
  });
});
