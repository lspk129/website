import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HeroHeader from './';

describe('HeroHeader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeroHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    const wrapper = shallow(<HeroHeader />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
