import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Hero from './';
import Container from '../../atoms/Container';
import Text from '../../atoms/Text';

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
    expect(wrapper.find(Hero)).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Container component', () => {
    expect(wrapper.find(Container)).toBePresent();
  });

  it('renders Text component with content "Moka Haiku:web app agency"', () => {
    expect(wrapper.find(Text).at(0)).toBePresent();
    expect(wrapper.find(Text).at(0)).toHaveText('Moka Haiku:web app agency');
  });

  it('renders Text component with content "Creating fast & interactive web applications with React and Meteor"', () => {
    expect(wrapper.find(Text).at(1)).toBePresent();
    expect(wrapper.find(Text).at(1)).toHaveText('Creating fast & interactive web applications with React and Meteor');
  });

  it('renders RaisedButton component', () => {
    expect(wrapper.find(RaisedButton)).toBePresent();
    expect(wrapper.find(RaisedButton)).toHaveProp('label', 'get a free consultation');
  });
});

