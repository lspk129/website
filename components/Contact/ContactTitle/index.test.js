import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ContactTitle from './';

describe('ContactTitle', () => {
  const shallowWrapper = shallow(<ContactTitle />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<ContactTitle />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders h3 element', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('h3');
  });
});
