import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IndexPage from './index';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Technology from '../components/Technology';

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
});
