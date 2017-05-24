import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import IndexPage from './index';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Technology from '../components/Technology';

describe('Hero', () => {
  const shallowWrapper = shallow(<IndexPage />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<IndexPage />);
    const tree = wrapper.toJSON();
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
