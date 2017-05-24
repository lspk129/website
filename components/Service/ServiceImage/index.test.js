import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ServiceImage from './index';

describe('HeroImage', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<ServiceImage />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    const wrapper = shallow(<ServiceImage />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
