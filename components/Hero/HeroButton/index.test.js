import React from 'react';
import { shallow } from 'enzyme';

import HeroButton from './index';

describe('HeroButton', () => {
  it('renders a button element', () => {
    const component = shallow(<HeroButton />);
    console.log(component);

    expect(component.find('styled.button').length).toEqual(1);
  });

  it('renders "get a free consultation" in the content', () => {
    const component = shallow(
      <HeroButton>get a free consultation</HeroButton>,
    );
    expect(component.find('button').text()).toEqual('get a free consultation');
  });
});
