import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import Hero from './';
import HeroImage from './HeroImage';
import HeroHeader from './HeroHeader';
import HeroContainer from './HeroContainer';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';

describe('Hero', () => {
  const muiTheme = getMuiTheme();
  const shallowWithContext = node => shallow(node, {
    context: { muiTheme },
  });

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<Hero />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders Hero component', () => {
    const wrapper = shallowWithContext(<Hero />);
    expect(wrapper).toBePresent();
  });

  it('renders HeroHeader component', () => {
    const wrapper = shallowWithContext(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroHeader)).toBePresent();
  });

  it('renders HeroContainer component', () => {
    const wrapper = shallowWithContext(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroContainer)).toBePresent();
  });

  it('renders HeroImage component', () => {
    const wrapper = shallowWithContext(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroImage)).toBePresent();
  });

  it('renders HeroTitle component', () => {
    const wrapper = shallowWithContext(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroTitle)).toBePresent();
  });

  it('renders HeroSubtitle component', () => {
    const wrapper = shallowWithContext(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(HeroSubtitle)).toBePresent();
  });

  it('renders RaisedButton component', () => {
    const wrapper = shallowWithContext(<Hero />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(RaisedButton)).toBePresent();
    expect(wrapper.find(RaisedButton)).toHaveProp('label', 'get a free consultation');
  });
});
