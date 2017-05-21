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
    expect(shallowWrapper.find('img')).toHaveProp('src', '../../static/react_logo.png');
  });

  it('renders h3 tag with content "React Js"', () => {
    expect(shallowWrapper.find('h3').at(0)).toHaveText('React.js');
  });
});
