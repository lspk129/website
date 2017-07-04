import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavbarLogo from './';
import Image from '../../atoms/Image';
import Container from '../../atoms/Container';

describe('NavbarLogo', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object.isRequired },
  });
  const wrapper = mountWithContext(<NavbarLogo />);

  it('renders correctly', () => {
    expect(wrapper).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Container component with backgroundColor property #ff4081', () => {
    expect(wrapper.find(Container)).toBePresent();
    expect(wrapper.find(Container)).toHaveProp('backgroundColor', '#ff4081');
  });

  it('renders Image component with source property "../../../static/MokaHaiku_main.png"', () => {
    expect(wrapper.find(Image)).toBePresent();
    expect(wrapper.find(Image)).toHaveProp('src', '../../../static/MokaHaiku_main.png');
  });

  it('renders Image component with alt property "Moka Haiku web development agency"', () => {
    expect(wrapper.find(Image)).toHaveProp('alt', 'Moka Haiku web development agency');
  });

  it('renders Image component with width property of 75', () => {
    expect(wrapper.find(Image)).toHaveProp('width', 75);
  });
});
