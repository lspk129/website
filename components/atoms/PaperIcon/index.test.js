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

  it('renders correctly', () => {
    const wrapper = mountWithContext(<PaperIcon />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(Paper)).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with circle props', () => {
    const wrapper = mountWithContext(<PaperIcon circle />);
    expect(wrapper).toHaveProp('circle', true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
