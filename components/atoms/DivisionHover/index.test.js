import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import DivisionHover from './';

describe('DivisionHover', () => {
  const shallowWrapper = shallow(<DivisionHover />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<DivisionHover />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders height props', () => {
    const wrapper = renderer.create(<DivisionHover height={100} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders scale boolean props', () => {
    const wrapper = renderer.create(<DivisionHover scale />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders background color boolean props with theme props', () => {
    const wrapper = renderer.create(<DivisionHover bgcolor />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders div tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
