import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BodyContainer from './';

describe('BodyContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BodyContainer />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('body');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
