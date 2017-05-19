import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HeroTitle from './index';

describe('HeroTitle', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<HeroTitle />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders h1 element', () => {
    const wrapper = shallow(<HeroTitle />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('h1');
  });

  it('renders text "Moka Haiku:web app agency"', () => {
    const wrapper = shallow(<HeroTitle>Moka Haiku:web app agency</HeroTitle>);
    expect(wrapper).toHaveText('Moka Haiku:web app agency');
  });
});
