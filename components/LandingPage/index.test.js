import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import LandingPage from './index';

describe('LandingPage component', () => {
  it('renders styled-component Wrapper', () => {
    const component = renderer.create(<LandingPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Wrapper component', () => {
  it('renders style class with image', () => {
    const component = shallow(<LandingPage />);
    expect(component.find('div').length).toEqual(1);
  });
});
