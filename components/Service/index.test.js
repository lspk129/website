import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import ServiceSection from './';
import ServiceLayout from './ServiceLayout';
import ServiceHeader from './ServiceHeader';

describe('ServiceSection', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<ServiceSection />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ServiceLayout component', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(ServiceLayout)).toBePresent();
  });

  it('renders ServiceHeader component', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(ServiceHeader)).toBePresent();
  });

  it('renders text "What we do"', () => {
    const wrapper = mount(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveText('What we do');
  });
});
