import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import ServiceSection from './';
import ServiceList from './ServiceList';
import ServiceHeader from './ServiceHeader';

describe('ServiceSection', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<ServiceSection />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ServiceList component', () => {
    const wrapper = mount(<ServiceList />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(ServiceList)).toBePresent();
  });

  it('renders ServiceHeader component', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(ServiceHeader)).toBePresent();
  });

  it('renders text "What we do"', () => {
    const wrapper = mount(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(ServiceHeader)).toHaveText('What we do');
  });
});
