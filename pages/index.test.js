import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Scroll from 'react-scroll';

import IndexPage from './index';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Technology from '../components/Technology';
import Contact from '../components/Contact';

describe('IndexPage', () => {
  const shallowWrapper = shallow(<IndexPage />);

  it('renders correctly', () => {
    const tree = toJson(shallowWrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders IndexPage component', () => {
    expect(shallowWrapper).toBePresent();
  });

  it('renders Hero component', () => {
    expect(shallowWrapper.find(Hero)).toBePresent();
  });

  it('renders Service componant', () => {
    expect(shallowWrapper.find(Service)).toBePresent();
  });

  it('renders Technology component', () => {
    expect(shallowWrapper.find(Technology)).toBePresent();
  });

  it('renders Scroll.Element component with name link "Service"', () => {
    expect(shallowWrapper.find(Scroll.Element).at(0)).toBePresent();
    expect(shallowWrapper.find(Scroll.Element).at(0)).toHaveProp('name', 'Service');
  });

  it('renders Scroll.Element component with name link "Technology"', () => {
    expect(shallowWrapper.find(Scroll.Element).at(1)).toBePresent();
    expect(shallowWrapper.find(Scroll.Element).at(1)).toHaveProp('name', 'Technology');
  });

  it('renders Contact component', () => {
    expect(shallowWrapper.find(Contact)).toBePresent();
  });
});
