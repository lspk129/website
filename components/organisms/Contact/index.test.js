import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { TextField, SelectField, RaisedButton } from 'material-ui/';
import { FaEnvelope, FaTwitter, FaGlobe } from 'react-icons/lib/fa';

import Contact from './';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import PaperIcons from '../../atoms/PaperIcons';
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
    expect(mountWrapper.find(Heading).at(0)).toHaveText('Contact us');
  });

  it('renders text "Get free consultation"', () => {
    expect(mountWrapper.find(Heading).at(1)).toHaveText('Get a free consultation');
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

  it('renders RaisedButton component', () => {
    expect(mountWrapper.find(RaisedButton)).toBePresent();
  });

  it('renders StyledColumn component', () => {
    expect(mountWrapper.find(StyledColumn)).toBePresent();
  });

  it('renders FaEnvelope component with envelope icon and text "info@mokahaiku.com"', () => {
    expect(mountWrapper.find(PaperIcons).at(0).find(FaEnvelope)).toBePresent();
    expect(mountWrapper.find(Paragraph).at(0)).toHaveText('info@mokahaiku.com');
  });

  it('renders FaTwitter component with Twitter icon and text "@mokahaiku"', () => {
    expect(mountWrapper.find(PaperIcons).at(1).find(FaTwitter)).toBePresent();
    expect(mountWrapper.find(Paragraph).at(1)).toHaveText('@mokahaiku');
  });

  it('renders FaGlobe component with globe icon and text "www.mokahaiku.com"', () => {
    expect(mountWrapper.find(PaperIcons).at(2).find(FaGlobe)).toBePresent();
    expect(mountWrapper.find(Paragraph).at(2)).toHaveText('www.mokahaiku.com');
  });
});