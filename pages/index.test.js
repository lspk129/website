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
  const shallowWrapper = shallow(<Hero />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Hero />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Hero component', () => {
    expect(shallowWrapper).toBePresent();
  });

  it('renders HeroHeader component', () => {
    expect(shallowWrapper.find(HeroHeader)).toBePresent();
  });

  it('renders HeroContainer component', () => {
    expect(shallowWrapper.find(HeroContainer)).toBePresent();
  });

  it('renders HeroImage component', () => {
    expect(shallowWrapper.find(HeroImage)).toBePresent();
  });

  it('renders HeroTitle component', () => {
    expect(shallowWrapper.find(HeroTitle)).toBePresent();
  });

  it('renders HeroSubtitle component', () => {
    expect(shallowWrapper.find(HeroSubtitle)).toBePresent();
  });

  it('renders RaisedButton component', () => {
    expect(shallowWrapper.find(RaisedButton)).toBePresent();
    expect(shallowWrapper.find(RaisedButton)).toHaveProp('label', 'get a free consultation');
  });
});
