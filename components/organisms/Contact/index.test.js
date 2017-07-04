import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { TextField, SelectField, RaisedButton } from 'material-ui/';
import { FaEnvelope, FaTwitter, FaGlobe } from 'react-icons/lib/fa';

import Contact from './';
import Text from '../../atoms/Text';
import Container from '../../atoms/Container';
import ColStyled from '../../atoms/ColStyled';
import Link from '../../atoms/Link';
import PaperIcon from '../../atoms/PaperIcon';

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
    expect(wrapper.find(Contact)).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders text "Get free consultation"', () => {
    expect(wrapper.find(Text).at(0)).toHaveText('Contact us');
  });

  it('renders text "Get free consultation"', () => {
    expect(wrapper.find(Text).at(4)).toHaveText('Get a free consultation');
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

  it('renders Container component', () => {
    expect(wrapper.find(Container)).toBePresent();
  });

  it('renders ColStyled component', () => {
    expect(wrapper.find(ColStyled)).toBePresent();
  });

  it('renders Link component with link "http://twitter.com/mokaHaiku" in new window', () => {
    expect(wrapper.find(Link)).toBePresent();
    expect(wrapper.find(Link)).toHaveProp('href', 'http://twitter.com/mokaHaiku');
    expect(wrapper.find(Link)).toHaveProp('target', '_blank');
  });

  it('renders PaperIcon component with circle prop and envelope icon', () => {
    expect(wrapper.find(PaperIcon).at(0)).toBePresent();
    expect(wrapper.find(PaperIcon).at(0)).toHaveProp('circle', true);
    expect(wrapper.find(PaperIcon).at(0).find(FaEnvelope)).toBePresent();
  });

  it('renders PaperIcon component with circle prop and twitter icon', () => {
    expect(wrapper.find(PaperIcon).at(1)).toBePresent();
    expect(wrapper.find(PaperIcon).at(1)).toHaveProp('circle', true);
    expect(wrapper.find(PaperIcon).at(1).find(FaTwitter)).toBePresent();
  });

  it('renders PaperIcon component with circle prop and globe icon', () => {
    expect(wrapper.find(PaperIcon).at(2)).toBePresent();
    expect(wrapper.find(PaperIcon).at(2)).toHaveProp('circle', true);
    expect(wrapper.find(PaperIcon).at(2).find(FaGlobe)).toBePresent();
  });

  it('renders Text component with label "info@mokahaiku.com"', () => {
    expect(wrapper.find(Text).at(1)).toHaveText('info@mokahaiku.com');
  });

  it('renders Text component with label "@mokahaiku"', () => {
    expect(wrapper.find(Text).at(2)).toHaveText('@mokahaiku');
  });

  it('renders Text component with label "www.mokahaiku.com"', () => {
    expect(wrapper.find(Text).at(3)).toHaveText('www.mokahaiku.com');
  });
});
