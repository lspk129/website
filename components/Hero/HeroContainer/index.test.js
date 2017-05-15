import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HeroContainer from './index';

describe('HeroContainer', () => {
  it('renders corretly', () => {
    const wrapper = renderer.create(<HeroContainer />);
    const tree = wrapper.toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    const wrapper = shallow(<HeroContainer />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
