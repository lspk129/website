import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Technology from './';
import Subtitle from '../../atoms/Subtitle';
import Heading from '../../atoms/Heading';
import TechnologyContainer from './TechnologyContainer';
import TechnologyItem from './TechnologyItem';

describe('Technology ', () => {
  const mountWrapper = mount(<Technology />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Technology />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Subtitle', () => {
    expect(mountWrapper).toBePresent();
    expect(mountWrapper.find(Subtitle)).toBePresent();
  });

  it('renders text "We use cutting-edge technologies"', () => {
    expect(mountWrapper.find(Subtitle)).toHaveText('We use cutting-edge technologies');
  });

  it('renders TechnologyContainer', () => {
    expect(mountWrapper.find(TechnologyContainer)).toBePresent();
  });

  it('renders TechnologyItem', () => {
    expect(mountWrapper.find(TechnologyItem)).toBePresent();
  });

  it('renders img tag to the technologies section', () => {
    expect(mountWrapper.find('img').at(0)).toHaveProp('src', '/static/React_logo.png');
  });

  it('renders Heading component with content "React"', () => {
    expect(mountWrapper.find(Heading).at(0)).toHaveText('React');
  });

  it('renders img tag to the technologies section', () => {
    expect(mountWrapper.find('img').at(1)).toHaveProp('src', '/static/Meteor_logo.png');
  });

  it('renders Heading component with content "Meteor"', () => {
    expect(mountWrapper.find(Heading).at(1)).toHaveText('Meteor');
  });

  it('renders img tag to the technologies section', () => {
    expect(mountWrapper.find('img').at(2)).toHaveProp('src', '/static/Nextjs_logo.png');
  });

  it('renders Heading component with content "Next.js"', () => {
    expect(mountWrapper.find(Heading).at(2)).toHaveText('Next.js');
  });
});
