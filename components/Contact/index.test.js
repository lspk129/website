import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

import Contact from './';
import ContactTitle from './ContactTitle';
import Paragraph from './Components/Paragraph';
import PaperIcons from './Components/PaperIcons';
import RaisedButtonStyled from './Components/RaisedButtonStyled';
import StyledColumn from './StyledColumn';

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

  it('renders RaisedButtonStyled component', () => {
    expect(mountWrapper.find(RaisedButtonStyled)).toBePresent();
  });

  it('renders StyledColumn component', () => {
    expect(mountWrapper.find(StyledColumn)).toBePresent();
  });

  it('renders PaperIcons component with envelope icon and text "info@mokahaiku.com"', () => {
    expect(mountWrapper.find(PaperIcons).at(0).find('i')).toHaveClassName('fa-envelope');
    expect(mountWrapper.find(Paragraph).at(0)).toHaveText('info@mokahaiku.com');
  });

  it('renders PaperIcons component with Twitter icon and text "@mokahaiku"', () => {
    expect(mountWrapper.find(PaperIcons).at(1).find('i')).toHaveClassName('fa fa-twitter');
    expect(mountWrapper.find(Paragraph).at(1)).toHaveText('@mokahaiku');
  });

  it('renders PaperIcons component with globe icon and text "www.mokahaiku.com"', () => {
    expect(mountWrapper.find(PaperIcons).at(2).find('i')).toHaveClassName('fa-globe');
    expect(mountWrapper.find(Paragraph).at(2)).toHaveText('www.mokahaiku.com');
  });
});
