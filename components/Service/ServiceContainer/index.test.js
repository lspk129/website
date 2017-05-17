import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ServiceContainer from './index';

describe('ServiceLayout', () => {
  it('renders corretcly', () => {
    const wrapper = renderer.create(<ServiceContainer />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    const wrapper = shallow(<ServiceContainer />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
