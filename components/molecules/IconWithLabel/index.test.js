import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { FaEnvelope } from 'react-icons/lib/fa';

import IconWithLabel from './';
import PaperIcon from '../../atoms/PaperIcon';
import Division from '../../atoms/Division';
import Text from '../../atoms/Text';

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

  it('renders correctly', () => {
    const wrapper = mountWithContext(<IconWithLabel />);
    expect(wrapper).toBePresent();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with icon pops', () => {
    const wrapper = mountWithContext(
      <IconWithLabel icon={<FaEnvelope />} />,
    );
    expect(wrapper).toHaveProp('icon', <FaEnvelope />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with label props', () => {
    const wrapper = mountWithContext(
      <IconWithLabel label={'info@mokahaiku.com'} />,
    );
    expect(wrapper).toHaveProp('label', 'info@mokahaiku.com');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders PaperIcon component', () => {
    const wrapper = mountWithContext(<IconWithLabel />);
    expect(wrapper.find(PaperIcon)).toBePresent();
  });

  it('renders Division component', () => {
    const wrapper = mountWithContext(<IconWithLabel />);
    expect(wrapper.find(Division)).toBePresent();
  });

  it('renders Paragraph component', () => {
    const wrapper = mountWithContext(<IconWithLabel />);
    expect(wrapper.find(Text)).toBePresent();
  });
});
