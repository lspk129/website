import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { TextField, SelectField, RaisedButton } from 'material-ui/';
import { FaEnvelope, FaTwitter, FaGlobe } from 'react-icons/lib/fa';

import Contact from './';
import Title from '../../atoms/Title';
import IconWithLabel from '../../molecules/IconWithLabel';
import Division from '../../atoms/Division';
import ColStyled from '../../atoms/ColStyled';

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

describe('Contact', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object.isRequired },
  });
  const wrapper = mountWithContext(<Contact />);

  it('renders correctly', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders text "Get free consultation"', () => {
    expect(wrapper.find(Title).at(0)).toHaveText('Contact us');
  });

  it('renders text "Get free consultation"', () => {
    expect(wrapper.find(Title).at(4)).toHaveText('Get a free consultation');
  });

  it('renders input field with text "Name"', () => {
    expect(wrapper.find(TextField).at(0)).toHaveText('Name');
  });

  it('renders input field with text "Your email"', () => {
    expect(wrapper.find(TextField).at(1)).toHaveText('Your email');
  });

  it('renders SelectField component', () => {
    expect(wrapper.find(SelectField)).toBePresent();
  });

  it('renders RaisedButton component', () => {
    expect(wrapper.find(RaisedButton)).toBePresent();
  });

  it('renders Division component', () => {
    expect(wrapper.find(Division)).toBePresent();
  });

  it('renders ColStyled component', () => {
    expect(wrapper.find(ColStyled)).toBePresent();
  });

  it('renders IconWithLabel component with envelope icon and text "info@mokahaiku.com"', () => {
    expect(wrapper.find(IconWithLabel).at(0).find(FaEnvelope)).toBePresent();
    expect(wrapper.find(IconWithLabel).at(0)).toHaveText('info@mokahaiku.com');
  });

  it('renders FaTwitter component with Twitter icon and text "@mokahaiku"', () => {
    expect(wrapper.find(IconWithLabel).at(1).find(FaTwitter)).toBePresent();
    expect(wrapper.find(IconWithLabel).at(1)).toHaveText('@mokahaiku');
  });

  it('renders FaGlobe component with globe icon and text "www.mokahaiku.com"', () => {
    expect(wrapper.find(IconWithLabel).at(2).find(FaGlobe)).toBePresent();
    expect(wrapper.find(IconWithLabel).at(2)).toHaveText('www.mokahaiku.com');
  });
});
