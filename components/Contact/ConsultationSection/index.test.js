import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ConsultationSection from './';

describe('ConsultationSection', () => {
  const shallowWrapper = shallow(<ConsultationSection />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<ConsultationSection />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders div element', () => {
    expect(shallowWrapper).toBePresent();
    expect(shallowWrapper).toHaveTagName('div');
  });
});
