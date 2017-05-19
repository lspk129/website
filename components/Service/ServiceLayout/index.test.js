import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ServiceLayout from './index';

describe('ServiceLayout', () => {
  it('renders corretcly', () => {
    const wrapper = renderer.create(<ServiceLayout />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    const wrapper = shallow(<ServiceLayout />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
