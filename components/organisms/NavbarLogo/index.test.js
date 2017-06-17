import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavbarLogo from './';
import Image from '../../atoms/Image';
import Division from '../../atoms/Division';

describe('NavbarLogo', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object.isRequired },
  });
  const mountWrapper = mountWithContext(<NavbarLogo />);

  it('renders correctly', () => {
    const tree = toJson(mountWrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders Division component with bgColor property #ff4081', () => {
    expect(mountWrapper.find(Division)).toBePresent();
    expect(mountWrapper.find(Division)).toHaveProp('bgColor', '#ff4081');
  });

  it('renders Image component with source property "../../../static/MokaHaiku_main.png"', () => {
    expect(mountWrapper.find(Image)).toBePresent();
    expect(mountWrapper.find(Image)).toHaveProp('src', '../../../static/MokaHaiku_main.png');
  });

  it('renders Image component with alt property "Moka Haiku web development agency"', () => {
    expect(mountWrapper.find(Image)).toHaveProp('alt', 'Moka Haiku web development agency');
  });

  it('renders Image component with width property of 5', () => {
    expect(mountWrapper.find(Image)).toHaveProp('width', 5);
  });
});
