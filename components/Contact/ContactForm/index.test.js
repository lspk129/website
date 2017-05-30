import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ContactForm from './';

describe('ContactForm', () => {
  const shallowWrapper = shallow(<ContactForm />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<ContactForm />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders form element', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('form');
  });
});
