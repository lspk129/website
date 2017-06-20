import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';

import PaperIcon from './';

describe('PaperIcon', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object },
  });
  const mountWrapper = mountWithContext(<PaperIcon />);

  it('renders correctly', () => {
    const tree = toJson(mountWrapper);
    expect(tree).toMatchSnapshot();
  });

  it('renders with circle props', () => {
    const tree = toJson(mountWithContext(<PaperIcon circle />));
    expect(tree).toMatchSnapshot();
  });

  it('renders Paper component', () => {
    expect(mountWrapper).toBePresent();
    expect(mountWrapper.find(Paper)).toBePresent();
  });
});
