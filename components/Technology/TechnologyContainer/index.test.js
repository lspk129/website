import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TechnologyContainer from './';

describe('ServiceContainer', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<TechnologyContainer />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    const wrapper = shallow(<TechnologyContainer />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
