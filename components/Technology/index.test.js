import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import TechnologySection from './index';
import TechnologyHeader from './TechnologyHeader';

describe('TechnologySection', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<TechnologySection />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders TechnologyHeader', () => {
    const wrapper = shallow(<TechnologySection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(TechnologyHeader)).toBePresent();
  });

  it('renders h2 tag with content "We use cutting-edge technologies"', () => {
    const wrapper = mount(<TechnologySection />);
    expect(wrapper).toBePresent();
    expect(wrapper.find(TechnologyHeader)).toHaveText('We use cutting-edge technologies');
  });
});
