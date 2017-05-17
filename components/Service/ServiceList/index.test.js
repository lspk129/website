import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ServiceList from './index';

describe('ServiceList', () => {
  it('renders corretcly', () => {
    const wrapper = renderer.create(<ServiceList />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders image of service', () => {
    const wrapper = shallow(<ServiceList />);
    expect(wrapper).toBePresent();
    expect(wrapper).not.toHaveTagName('i');
  });

  it('renders h3 element with content "Web development"', () => {
    const wrapper = shallow(<ServiceList />);
    expect(wrapper).toBePresent();
    expect(wrapper).not.toHaveHTML('<h3>Web development</h3>');
  });

  it('renders p element with content "We help you build fast, functional, performance oriented websites and web apps"', () => {
    const wrapper = shallow(<ServiceList />);
    expect(wrapper).toBePresent();
    expect(wrapper).not.toHaveHTML(
      '<p>We help you build fast, functional, performance oriented websites and web apps</p>',
    );
  });
});
