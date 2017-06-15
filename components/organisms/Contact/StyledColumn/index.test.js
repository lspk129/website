import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Column } from 'hedron';

import StyledColumn from './';

describe('StyledColumn', () => {
  const shallowWrapper = shallow(<StyledColumn />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<StyledColumn />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Column component', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper.find(Column)).toBePresent();
  });
});
