import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Contact from './';
import ContactContainer from './ContactContainer';
import ContactInfoSection from './ContactInfoSection';
import ConsultationSection from './ConsultationSection';
import ContactTitle from './ContactTitle';
import PTag from './ContactForm/PTag';


if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

describe('Contact', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object },
  });
  const mountWrapper = mountWithContext(<Contact />);

  it('renders correctly', () => {
    const tree = toJson(mountWrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders ContactContainer component', () => {
    expect(mountWrapper.find(ContactContainer)).toBePresent();
  });

  it('renders ContactInfoSection component', () => {
    expect(mountWrapper.find(ContactInfoSection)).toBePresent();
  });

  it('renders ConsultationSection component', () => {
    expect(mountWrapper.find(ConsultationSection)).toBePresent();
  });

  it('renders text "Get free consultation"', () => {
    expect(mountWrapper.find(ContactTitle).at(0)).toHaveText('Contact us');
  });

  it('renders text "Get free consultation"', () => {
    expect(mountWrapper.find(ContactTitle).at(1)).toHaveText('Get a free consultation');
  });

  it('renders input field with text "Name"', () => {
    expect(mountWrapper.find(TextField).at(0)).toHaveText('Name');
  });

  it('renders input field with text "Your email"', () => {
    expect(mountWrapper.find(TextField).at(1)).toHaveText('Your email');
  });

  it('renders SelectField component', () => {
    expect(mountWrapper.find(SelectField)).toBePresent();
  });

  it('renders RaisedButton component with text "Send"', () => {
    expect(mountWrapper.find(RaisedButton)).toHaveText('Send');
  });

  it('renders FloatingActionButton with envelope icon and text "info@mokahaiku.com"', () => {
    expect(mountWrapper.find(FloatingActionButton).at(0).find('i')).toHaveClassName('fa-envelope');
    expect(mountWrapper.find(PTag).at(0)).toHaveText('info@mokahaiku.com');
  });

  it('renders FloatingActionButton with Twitter icon and text "@mokahaiku"', () => {
    expect(mountWrapper.find(FloatingActionButton).at(1).find('i')).toHaveClassName('fa-twitter');
    expect(mountWrapper.find(PTag).at(1)).toHaveText('@mokahaiku');
  });

  it('renders FloatingActionButton with globe icon and text "www.mokahaiku.com"', () => {
    expect(mountWrapper.find(FloatingActionButton).at(2).find('i')).toHaveClassName('fa-globe');
    expect(mountWrapper.find(PTag).at(2)).toHaveText('www.mokahaiku.com');
  });
});
