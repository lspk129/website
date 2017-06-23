import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Technology from './';
import Card from '../../molecules/Card';
import Text from '../../atoms/Text';
import Division from '../../atoms/Division';
import DivisionHover from '../../atoms/DivisionHover';

describe('Technology ', () => {
  const wrapper = mount(<Technology />);

  it('renders correctly', () => {
    expect(wrapper).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Text', () => {
    expect(wrapper.find(Text)).toBePresent();
  });

  it('renders Text component with content "We use cutting-edge technologies"', () => {
    expect(wrapper.find(Text).at(0)).toHaveText('We use cutting-edge technologies');
  });

  it('renders DivisionHover component', () => {
    expect(wrapper.find(DivisionHover)).toBePresent();
  });

  it('renders Division component', () => {
    expect(wrapper.find(Division)).toBePresent();
  });

  it('renders Card component with label "React"', () => {
    expect(wrapper.find(Card).at(0)).toHaveProp('label', 'React');
  });

  it('renders Card component with label "Meteor"', () => {
    expect(wrapper.find(Card).at(1)).toHaveProp('label', 'Meteor');
  });

  it('renders Card component with label "Next.js"', () => {
    expect(wrapper.find(Card).at(2)).toHaveProp('label', 'Next.js');
  });

  it('renders img tag to the technologies section', () => {
    expect(wrapper.find('img').at(0)).toHaveProp('src', '/static/React_logo.png');
  });

  it('renders img tag to the technologies section', () => {
    expect(wrapper.find('img').at(1)).toHaveProp('src', '/static/Meteor_logo.png');
  });


  it('renders img tag to the technologies section', () => {
    expect(wrapper.find('img').at(2)).toHaveProp('src', '/static/Nextjs_logo.png');
  });
});
