import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MdDesktopMac, MdColorLens } from 'react-icons/lib/md';

import Service from './';
import Container from '../../atoms/Container';
import ContainerHover from '../../atoms/ContainerHover';
import Card from '../../molecules/Card';
import Text from '../../atoms/Text';

describe('Service', () => {
  const wrapper = mount(<Service />);

  it('renders correctly', () => {
    expect(wrapper).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Text component', () => {
    expect(wrapper).toBePresent();
    expect(wrapper.find(Text)).toBePresent();
  });

  it('renders text "What we do"', () => {
    expect(wrapper.find(Text).at(0)).toHaveText('What we do');
  });
  it('renders Card component', () => {
    expect(wrapper.find(Card)).toBePresent();
  });

  it('renders Container component', () => {
    expect(wrapper.find(Container)).toBePresent();
  });

  it('renders ContainerHover component', () => {
    expect(wrapper.find(ContainerHover)).toBePresent();
  });

  it('renders Card component with text "Web development"', () => {
    expect(wrapper.find(Card).at(0)).toHaveProp('label', 'Web development');
  });

  it('renders Card component with content "We help you build fast, functional, performance oriented websites and web apps"', () => {
    expect(wrapper.find(Card).at(0)).toHaveProp(
      'text',
      'We help you build fast, functional, performance oriented websites and web apps',
    );
  });

  it('renders Card component with text "Web design"', () => {
    expect(wrapper.find(Card).at(1)).toHaveProp('label', 'Web design');
  });

  it('renders Card component with content "We are creating unique and adaptive designs to engage customers"', () => {
    expect(wrapper.find(Card).at(1)).toHaveProp(
      'text',
      'We are creating unique and adaptive designs to engage customers',
    );
  });

  it('renders MdDesktopMac component with desktop icon', () => {
    expect(wrapper.find(MdDesktopMac)).toBePresent();
  });

  it('renders MdColorLens component with color lens icon', () => {
    expect(wrapper.find(MdColorLens)).toBePresent();
  });
});
