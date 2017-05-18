import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import ServiceSection from './';
import ServiceHeader from './ServiceHeader';
import ServiceContainer from './ServiceContainer';
import ServiceItem from './ServiceItem';

describe('ServiceSection', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<ServiceSection />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
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

  it('renders ServiceContainer component', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(ServiceContainer)).toBePresent();
  });

  it('renders ServiceItem component', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(ServiceItem)).toBePresent();
  });

  it('renders image of service', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find('.web-dev').find('i')).toHaveClassName('material-icons');
    expect(wrapper.find('.web-dev').find('i')).toHaveText('desktop_mac');
  });

  it('renders h3 element with content "Web development"', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find('.web-dev').find('h3')).toHaveText('Web development');
  });

  it('renders p element with content "We help you build fast, functional, performance oriented websites and web apps"', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find('.web-dev').find('p')).toHaveText(
      'We help you build fast, functional, performance oriented websites and web apps',
    );
  });

  it('renders image of service', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find('.web-design').find('i')).toHaveClassName('material-icons');
    expect(wrapper.find('.web-design').find('i')).toHaveText('color_lens');
  });

  it('renders h3 element with content "Web design"', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find('.web-design').find('h3')).toHaveText('Web design');
  });

  it('renders p element with content "We are creating unique and adaptive designs to engage customers"', () => {
    const wrapper = shallow(<ServiceSection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find('.web-design').find('p')).toHaveText(
      'We are creating unique and adaptive designs to engage customers',
    );
  });
});
