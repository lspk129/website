import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Hero from './';
import Division from '../../atoms/Division';
import Title from '../../atoms/Title';

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

describe('Hero', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object },
  });
  const wrapper = mountWithContext(<Hero />);

  it('renders correctly', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders Hero component', () => {
    expect(wrapper).toBePresent();
  });

  it('renders Division component', () => {
    expect(wrapper.find(Division)).toBePresent();
  });

  it('renders Title component with content "Moka Haiku:web app agency"', () => {
    expect(wrapper.find(Title).at(0)).toBePresent();
    expect(wrapper.find(Title).at(0)).toHaveText('Moka Haiku:web app agency');
  });

  it('renders Title component with content "Creating fast & interactive web applications with React and Meteor"', () => {
    expect(wrapper.find(Title).at(1)).toBePresent();
    expect(wrapper.find(Title).at(1)).toHaveText('Creating fast & interactive web applications with React and Meteor');
  });

  it('renders RaisedButton component', () => {
    expect(wrapper.find(RaisedButton)).toBePresent();
    expect(wrapper.find(RaisedButton)).toHaveProp('label', 'get a free consultation');
  });
});

