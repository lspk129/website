import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import TehcnologyHeader from './';

describe('TehcnologyHeader', () => {
  it('renders corretcly', () => {
    const wrapper = renderer.create(<TehcnologyHeader />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders h2 element', () => {
    const wrapper = shallow(<TehcnologyHeader />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('h2');
  });
});
