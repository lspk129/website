import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import FontAwesomeIcon from './';

describe('FontAwesomeIcon', () => {
  const shallowWrapper = shallow(<FontAwesomeIcon />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<FontAwesomeIcon />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders i tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('i');
  });
});
