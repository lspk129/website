import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Technology from './';
import Card from '../../molecules/Card';
import Title from '../../atoms/Title';
import Division from '../../atoms/Division';
import DivisionHover from '../../atoms/DivisionHover';

describe('Technology ', () => {
  const mountWrapper = mount(<Technology />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Technology />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Title', () => {
    expect(mountWrapper).toBePresent();
    expect(mountWrapper.find(Title)).toBePresent();
  });

  it('renders Title component with content "We use cutting-edge technologies"', () => {
    expect(mountWrapper.find(Title).at(0)).toHaveText('We use cutting-edge technologies');
  });

  it('renders DivisionHover component', () => {
    expect(mountWrapper.find(DivisionHover)).toBePresent();
  });

  it('renders Division component', () => {
    expect(mountWrapper.find(Division)).toBePresent();
  });

  it('renders Card component with label "React"', () => {
    expect(mountWrapper.find(Card).at(0)).toHaveProp('label', 'React');
  });

  it('renders Card component with label "Meteor"', () => {
    expect(mountWrapper.find(Card).at(1)).toHaveProp('label', 'Meteor');
  });

  it('renders Card component with label "Next.js"', () => {
    expect(mountWrapper.find(Card).at(2)).toHaveProp('label', 'Next.js');
  });

  it('renders img tag to the technologies section', () => {
    expect(mountWrapper.find('img').at(0)).toHaveProp('src', '/static/React_logo.png');
  });

  it('renders img tag to the technologies section', () => {
    expect(mountWrapper.find('img').at(1)).toHaveProp('src', '/static/Meteor_logo.png');
  });


  it('renders img tag to the technologies section', () => {
    expect(mountWrapper.find('img').at(2)).toHaveProp('src', '/static/Nextjs_logo.png');
  });
});
