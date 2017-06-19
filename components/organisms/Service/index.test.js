import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MdDesktopMac, MdColorLens } from 'react-icons/lib/md';

import Service from './';
import Division from '../../atoms/Division';
import DivisionHover from '../../atoms/DivisionHover';
import Card from '../../molecules/Card';
import Title from '../../atoms/Title';

describe('Service', () => {
  const mountWrapper = mount(<Service />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Service />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Title component', () => {
    expect(mountWrapper).toBePresent();
    expect(mountWrapper.find(Title)).toBePresent();
  });

  it('renders text "What we do"', () => {
    const wrapper = mount(<Service />);
    expect(wrapper.find(Title)).toHaveText('What we do');
  });
  it('renders Card component', () => {
    expect(mountWrapper.find(Card)).toBePresent();
  });

  it('renders Division component', () => {
    expect(mountWrapper.find(Division)).toBePresent();
  });

  it('renders DivisionHover component', () => {
    expect(mountWrapper.find(DivisionHover)).toBePresent();
  });

  it('renders Card component with text "Web development"', () => {
    expect(mountWrapper.find(Card).at(0)).toHaveProp('label', 'Web development');
  });

  it('renders Card component with content "We help you build fast, functional, performance oriented websites and web apps"', () => {
    expect(mountWrapper.find(Card).at(0)).toHaveProp(
      'text',
      'We help you build fast, functional, performance oriented websites and web apps',
    );
  });

  it('renders Card component with text "Web design"', () => {
    expect(mountWrapper.find(Card).at(1)).toHaveProp('label', 'Web design');
  });

  it('renders Card component with content "We are creating unique and adaptive designs to engage customers"', () => {
    expect(mountWrapper.find(Card).at(1)).toHaveProp(
      'text',
      'We are creating unique and adaptive designs to engage customers',
    );
  });

  it('renders MdDesktopMac component with desktop icon', () => {
    expect(mountWrapper.find(MdDesktopMac)).toBePresent();
  });

  it('renders MdColorLens component with color lens icon', () => {
    expect(mountWrapper.find(MdColorLens)).toBePresent();
  });
});
