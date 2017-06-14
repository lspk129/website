import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MdDesktopMac, MdColorLens } from 'react-icons/lib/md';

import Service from './';
import ServiceHeader from './ServiceHeader';
import ServiceContainer from './ServiceContainer';
import ServiceItem from './ServiceItem';

describe('Service', () => {
  const shallowWrapper = shallow(<Service />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Service />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ServiceHeader component', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper.find(ServiceHeader)).toBePresent();
  });

  it('renders text "What we do"', () => {
    const wrapper = mount(<Service />);
    expect(wrapper.find(ServiceHeader)).toHaveTagName('styled.h2');
    expect(wrapper.find(ServiceHeader)).toHaveText('What we do');
  });

  it('renders ServiceContainer component', () => {
    expect(shallowWrapper.find(ServiceContainer)).toBePresent();
  });

  it('renders ServiceItem component', () => {
    expect(shallowWrapper.find(ServiceItem)).toBePresent();
  });

  it('renders MdDesktopMac component with desktop icon', () => {
    expect(shallowWrapper.find(MdDesktopMac)).toBePresent();
  });

  it('renders h3 element with content "Web development"', () => {
    expect(shallowWrapper.find('h3').at(0)).toHaveText('Web development');
  });

  it('renders p element with content "We help you build fast, functional, performance oriented websites and web apps"', () => {
    expect(shallowWrapper.find('p').at(0)).toHaveText(
      'We help you build fast, functional, performance oriented websites and web apps',
    );
  });

  it('renders MdColorLens component with color lens icon', () => {
    expect(shallowWrapper.find(MdColorLens)).toBePresent();
  });

  it('renders h3 element with content "Web design"', () => {
    expect(shallowWrapper.find('h3').at(1)).toHaveText('Web design');
  });

  it('renders p element with content "We are creating unique and adaptive designs to engage customers"', () => {
    expect(shallowWrapper.find('p').at(1)).toHaveText(
      'We are creating unique and adaptive designs to engage customers',
    );
  });
});
