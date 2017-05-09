import React from 'react';
import { shallow } from 'enzyme';

import HeroSubtitle from './index';

describe('HeroSubtext content', () => {
  it('renders h2 element', () => {
    const content = shallow(<HeroSubtitle />);
    expect(content.find('h2').length).toEqual(1);
  });

  it('renders text "Creating fast & interactive web applications with React and Meteor" ', () => {
    const content = shallow(
      <HeroSubtitle>
        Creating fast & interactive web applications with React and Meteor
      </HeroSubtitle>,
    );
    expect(content.find('h2').text()).toEqual('Creating fast & interactive web applications with React and Meteor');
  });
});
