import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TechnologyItem from './';

describe('TechnologyItem', () => {
  const shallowWrapper = shallow(<TechnologyItem />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<TechnologyItem />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
