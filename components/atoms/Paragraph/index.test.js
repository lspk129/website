import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Paragraph from './';

describe('Paragraph', () => {
  const shallowWrapper = shallow(<Paragraph />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Paragraph />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders p tag', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('p');
  });
});
