import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import Hero from './index';
import HeroImage from './HeroImage';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroButton from './HeroButton';

describe('Hero', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<Hero />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders HeroImage component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroImage)).toBePresent();
  });

  it('renders HeroTitle component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroTitle)).toBePresent();
  });

  it('renders HeroSubtitle component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroSubtitle)).toBePresent();
  });

  it('renders HeroButton component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroButton)).toBePresent();
  });
});
