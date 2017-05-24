import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TechnologyItem from './';

describe('TechnologyItem', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<TechnologyItem />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    const wrapper = shallow(<TechnologyItem />);
    expect(wrapper).toHaveTagName('div');
  });
});
