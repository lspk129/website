import React from 'react';
import { shallow } from 'enzyme';

import HeroTitle from './index';

describe('', () => {
  it('renders h1 element', () => {
    const content = shallow(<HeroTitle />);

    expect(content.find('h1').length).toEqual(1);
  });

  it('renders text "Moka Haiku: web app agency" ', () => {
    const content = shallow(
      <HeroTitle>Moka Haiku:web app agency</HeroTitle>,
    );
    expect(content.find('h1').text()).toEqual('Moka Haiku:web app agency');
  });
});
