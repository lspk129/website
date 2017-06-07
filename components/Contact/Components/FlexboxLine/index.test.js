import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import FlexboxLine from './';

describe('FlexboxLine', () => {
  const shallowWrapper = shallow(<FlexboxLine />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<FlexboxLine />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div elment', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
