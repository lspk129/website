import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HeroSubtitle from './index';

describe('HeroSubtitle', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<HeroSubtitle />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders h2 element', () => {
    const wrapper = shallow(<HeroSubtitle />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('h2');
  });

  it('renders text "Creating fast & interactive web applications with React and Meteor" ', () => {
    const wrapper = shallow(
      <HeroSubtitle>
        Creating fast & interactive web applications with React and Meteor
      </HeroSubtitle>,
    );
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveText('Creating fast & interactive web applications with React and Meteor');
  });
});
