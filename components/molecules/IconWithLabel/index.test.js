import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import IconWithLabel from './';
import PaperIcons from '../../atoms/PaperIcons';
import Division from '../../atoms/Division';
import Paragraph from '../../atoms/Paragraph';

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

describe('IconWithLabel', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = node => mount(node, {
    context: { muiTheme },
    childContextTypes: { muiTheme: PropTypes.object },
  });
  const mountWrapper = mountWithContext(<IconWithLabel />);

  it('renders correctly', () => {
    const tree = toJson(mountWrapper);
    expect(tree).toMatchSnapshot();
  });
  it('renders IconWithLabel component', () => {
    expect(mountWrapper).toBePresent();
  });

  it('renders PaperIcons component', () => {
    expect(mountWrapper.find(PaperIcons)).toBePresent();
  });

  it('renders Division component', () => {
    expect(mountWrapper.find(Division)).toBePresent();
  });

  it('renders Paragraph component', () => {
    expect(mountWrapper.find(Paragraph)).toBePresent();
  });
});
