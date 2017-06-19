import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Col } from 'react-styled-flexboxgrid';


import ColStyled from './';

describe('ColStyled', () => {
  const mountWrapper = mount(<ColStyled />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<ColStyled />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Col component', () => {
    expect(mountWrapper).toBePresent();
    expect(mountWrapper.find(Col)).toBePresent();
  });
});
