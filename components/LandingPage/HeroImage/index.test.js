import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import HeroImage from './index';

describe('HeroImage component', () => {
  it('renders image', () => {
    const component = renderer.create(<HeroImage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('HeroImage component', () => {
  it('renders div with class', () => {
    const component = shallow(<HeroImage />);
    expect(component.find('div').length).toEqual(1);
  });
});
