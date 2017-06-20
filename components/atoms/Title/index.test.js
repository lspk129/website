import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Title from './';

describe('Title', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<Title />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with tag props', () => {
    const wrapper = renderer.create(<Title tag={'h1'} />);
    expect(mount(<Title tag={'h1'} />).find('h1')).toBePresent();
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with hero boolean props', () => {
    const wrapper = renderer.create(<Title hero />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders with upperCase props', () => {
    const wrapper = renderer.create(<Title upperCase />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders Title component', () => {
    const wrapper = mount(<Title />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(Title)).toBePresent();
  });
});
