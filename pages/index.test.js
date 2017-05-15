import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import RaisedButton from 'material-ui/RaisedButton';

import Hero from './index';
import HeroImage from '../components/Hero/HeroImage';
import HeroTitle from '../components/Hero/HeroTitle';
import HeroSubtitle from '../components/Hero/HeroSubtitle';
import HeroHeader from '../components/Hero/HeroHeader';
import HeroContainer from '../components/Hero/HeroContainer';

describe('Hero', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<Hero />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Hero component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toBePresent();
  });

  it('renders HeroHeader component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroHeader)).toBePresent();
  });

  it('renders HeroContainer component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroContainer)).toBePresent();
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

  it('renders RaisedButton component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(RaisedButton)).toBePresent();
    expect(wrapper.find(RaisedButton)).toHaveProp('label', 'get a free consultation');
  });
});
