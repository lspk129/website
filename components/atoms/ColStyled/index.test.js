import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Col } from 'react-styled-flexboxgrid';

import ColStyled from './';

describe('ColStyled', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<ColStyled />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with color props', () => {
    const wrapper = renderer.create(<ColStyled color={'red'} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('renders with align props', () => {
    const wrapper = renderer.create(<ColStyled align={'center'} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders Col component', () => {
    const wrapper = mount(<ColStyled />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(Col)).toBePresent();
  });
});
