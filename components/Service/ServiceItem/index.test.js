import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ServiceItem from './';

describe('ServiceItem', () => {
  it('renders corretcly', () => {
    const wrapper = renderer.create(<ServiceItem />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    const wrapper = shallow(<ServiceItem />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
  });
});
