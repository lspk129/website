import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Card from './';
import Division from '../../atoms/Division';
import Title from '../../atoms/Title';

describe('Card', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<Card />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with image props', () => {
    const wrapper = renderer.create(<Card image={<img src={'../../../static/React_logo.png'} alt={'React'} />} />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with label props', () => {
    const wrapper = renderer.create(<Card label={'test label'} />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with text props', () => {
    const wrapper = renderer.create(<Card text={'testing text'} />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Division component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(Division)).toBePresent();
  });

  it('renders Title component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(Title)).toBePresent();
  });
});
