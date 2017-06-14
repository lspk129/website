import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MdDesktopMac, MdColorLens } from 'react-icons/lib/md';

import Service from './';
import ServiceContainer from './ServiceContainer';
import ServiceItem from './ServiceItem';
import Subtitle from '../atoms/Subtitle';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

describe('Service', () => {
  const mountWrapper = mount(<Service />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Service />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Subtitle component', () => {
    expect(mountWrapper).toBePresent();
    expect(mountWrapper.find(Subtitle)).toBePresent();
  });

  it('renders text "What we do"', () => {
    const wrapper = mount(<Service />);
    expect(wrapper.find(Subtitle)).toHaveText('What we do');
  });

  it('renders ServiceContainer component', () => {
    expect(mountWrapper.find(ServiceContainer)).toBePresent();
  });

  it('renders ServiceItem component', () => {
    expect(mountWrapper.find(ServiceItem)).toBePresent();
  });

  it('renders MdDesktopMac component with desktop icon', () => {
    expect(mountWrapper.find(MdDesktopMac)).toBePresent();
  });

  it('renders Heading component with text "Web development"', () => {
    expect(mountWrapper.find(Heading).at(0)).toHaveText('Web development');
  });

  it('renders Paragraph component with content "We help you build fast, functional, performance oriented websites and web apps"', () => {
    expect(mountWrapper.find(Paragraph).at(0)).toHaveText(
      'We help you build fast, functional, performance oriented websites and web apps',
    );
  });

  it('renders MdColorLens component with color lens icon', () => {
    expect(mountWrapper.find(MdColorLens)).toBePresent();
  });

  it('renders Heading component with text "Web design"', () => {
    expect(mountWrapper.find(Heading).at(1)).toHaveText('Web design');
  });

  it('renders Paragraph component with content "We are creating unique and adaptive designs to engage customers"', () => {
    expect(mountWrapper.find(Paragraph).at(1)).toHaveText(
      'We are creating unique and adaptive designs to engage customers',
    );
  });
});
