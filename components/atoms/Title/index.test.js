import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Title from './';

describe('Title', () => {
  const shallowWrapper = shallow(<Title />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Title />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Title component', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper.find(Title)).toBePresent();
  });
});
