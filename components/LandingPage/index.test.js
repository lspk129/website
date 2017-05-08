import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import LandingPage from './index';

describe('LandingPage', () => {
  it('renders without crashing', () => {
    const component = shallow(<LandingPage />);
    expect(component.find('div').length).toEqual(1);
  });
});
