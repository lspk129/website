import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StickyContainer, Sticky } from 'react-sticky';
import Scroll from 'react-scroll';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Navbar from './';
import AnimatedBorder from '../../atoms/AnimatedBorder';
import ColStyled from '../../atoms/ColStyled';
import Division from '../../atoms/Division';

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

describe('Navbar', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object.isRequired },
  });
  const wrapper = mountWithContext(<StickyContainer><Navbar /></StickyContainer>);

  it('renders correctly', () => {
    expect(wrapper).toBePresent();
    expect(wrapper.find(Navbar)).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders ColStyled component', () => {
    expect(wrapper.find(ColStyled)).toBePresent();
  });

  it('renders Division component', () => {
    expect(wrapper.find(Division)).toBePresent();
  });

  it('renders AnimatedBorder component', () => {
    expect(wrapper.find(AnimatedBorder)).toBePresent();
  });

  it('renders Sticky component', () => {
    expect(wrapper.find(Sticky)).toBePresent();
  });

  it('renders Scroll.Link component with link to Services section', () => {
    expect(wrapper.find(Scroll.Link)).toBePresent();
    expect(wrapper.find(Scroll.Link).at(0)).toHaveProp('to', 'Service');
  });

  it('renders Scroll.Link component with link to Technologies section', () => {
    expect(wrapper.find(Scroll.Link).at(1)).toHaveProp('to', 'Technology');
  });

  it('renders RaisedButton component', () => {
    expect(wrapper.find(RaisedButton)).toBePresent();
    expect(wrapper.find(RaisedButton)).toHaveProp('label', 'Contact us');
  });
});
