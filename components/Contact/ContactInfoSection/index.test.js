import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ContactInfoSection from './';

describe('ContactInfoSection', () => {
  const shallowWrapper = shallow(<ContactInfoSection />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<ContactInfoSection />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
