import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Hero from './';
import HeroImage from './HeroImage';
import HeroContainer from './HeroContainer';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';

describe('Hero', () => {
  const muiTheme = getMuiTheme();
  const shallowWithContext = node => shallow(node, {
    context: { muiTheme },
  });
  const shallowWrapper = shallowWithContext(<Hero />);

  it('renders correctly', () => {
    const wrapper = shallowWithContext(<Hero />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders Hero component', () => {
    expect(shallowWrapper).toBePresent();
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
