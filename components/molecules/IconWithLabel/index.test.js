import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { FaEnvelope } from 'react-icons/lib/fa';

import IconWithLabel from './';
import PaperIcons from '../../atoms/PaperIcons';
import Division from '../../atoms/Division';
import Title from '../../atoms/Title';

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
  const wrapper = mountWithContext(<IconWithLabel />);

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with icon pops', () => {
    const wrapperWithProps = mountWithContext(
      <IconWithLabel icon={<FaEnvelope />} />,
    );
    expect(toJson(wrapperWithProps)).toMatchSnapshot();
  });

  it('renders with label props', () => {
    const wrapperWithProps = mountWithContext(
      <IconWithLabel label={'info@mokahaiku.com'} />,
    );
    expect(toJson(wrapperWithProps)).toMatchSnapshot();
  });

  it('renders IconWithLabel component', () => {
    expect(wrapper).toBePresent();
  });

  it('renders PaperIcons component', () => {
    expect(wrapper.find(PaperIcons)).toBePresent();
  });

  it('renders Division component', () => {
    expect(wrapper.find(Division)).toBePresent();
  });

  it('renders Paragraph component', () => {
    expect(wrapper.find(Title)).toBePresent();
  });
});
