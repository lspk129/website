import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HeroImage from './index';

describe('HeroImage', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<HeroImage />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    const wrapper = shallow(<HeroImage />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
