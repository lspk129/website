import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Division from './';

describe('Division', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<Division />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render with textAlign props', () => {
    const wrapper = renderer.create(<Division textAlign={'center'} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('render with margin props', () => {
    const wrapper = renderer.create(<Division m />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('render with margin left and right props', () => {
    const wrapper = renderer.create(<Division mx />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('render with margin top and bottom props', () => {
    const wrapper = renderer.create(<Division my />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('render with margin top props', () => {
    const wrapper = renderer.create(<Division mt />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with margin bottom props', () => {
    const wrapper = renderer.create(<Division mb />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with margin right props', () => {
    const wrapper = renderer.create(<Division mr />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with margin left props', () => {
    const wrapper = renderer.create(<Division ml />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with padding props', () => {
    const wrapper = renderer.create(<Division p />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders Division with padding left and right props', () => {
    const wrapper = renderer.create(<Division px />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with padding top and bottom props', () => {
    const wrapper = renderer.create(<Division py />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with padding top props', () => {
    const wrapper = renderer.create(<Division pt />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with padding bottom props', () => {
    const wrapper = renderer.create(<Division pb />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with padding right props', () => {
    const wrapper = renderer.create(<Division pr />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with padding left props', () => {
    const wrapper = renderer.create(<Division pl />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with background color props', () => {
    const wrapper = renderer.create(<Division bgColor={'white'} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with background image source props', () => {
    const wrapper = renderer.create(<Division src={'../../../static/Service_image.jpg'} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with z-index props', () => {
    const wrapper = renderer.create(<Division zIndex={2} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders div tag', () => {
    const wrapper = shallow(<Division />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
