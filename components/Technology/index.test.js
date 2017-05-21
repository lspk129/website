import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Technology from './index';
import TechnologyHeader from './TechnologyHeader';
import TechnologyContainer from './TechnologyContainer';
import TechnologyItem from './TechnologyItem';

describe('Technology ', () => {
  const shallowWrapper = shallow(<Technology />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Technology />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders TechnologyHeader', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper.find(TechnologyHeader)).toBePresent();
  });

  it('renders h2 tag with content "We use cutting-edge technologies"', () => {
    const wrapper = mount(<Technology />);
    expect(wrapper.find(TechnologyHeader)).toHaveText('We use cutting-edge technologies');
  });

  it('renders TechnologyContainer', () => {
    expect(shallowWrapper.find(TechnologyContainer)).toBePresent();
  });

  it('renders TechnologyItem', () => {
    expect(shallowWrapper.find(TechnologyItem)).toBePresent();
  });

  it('renders img tag to the technologies section', () => {
    expect(shallowWrapper.find('img').at(0)).toHaveProp('src', '../../static/react_logo.png');
  });

  it('renders h3 tag with content "React Js"', () => {
    expect(shallowWrapper.find('h3').at(0)).toHaveText('React Js');
  });

  it('renders img tag to the technologies section', () => {
    expect(shallowWrapper.find('img').at(1)).toHaveProp('src', '../../static/meteor_logo.png');
  });

  it('renders h3 tag with content "Meteor Js"', () => {
    expect(shallowWrapper.find('h3').at(1)).toHaveText('Meteor Js');
  });

  it('renders img tag to the technologies section', () => {
    expect(shallowWrapper.find('img').at(2)).toHaveProp('src', '../../static/next_logo.png');
  });

  it('renders h3 tag with content "Next.js"', () => {
    expect(shallowWrapper.find('h3').at(2)).toHaveText('Next.js');
  });
});
