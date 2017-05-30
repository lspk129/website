import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ContactContainer from './';

describe('ContactContainer', () => {
  const shallowWrapper = shallow(<ContactContainer />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<ContactContainer />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
