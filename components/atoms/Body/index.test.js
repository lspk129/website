import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import BodyContainer from './';

describe('BodyContainer', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<BodyContainer />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders body element', () => {
    const wrapper = shallow(<BodyContainer />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('body');
  });
});
