import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Contact from './';
import ContactContainer from './ContactContainer';
import ContactInfoSection from './ContactInfoSection';
import ConsultationSection from './ConsultationSection';
import ContactTitle from './ContactTitle';

describe('Contact', () => {
  const mountWrapper = mount(<Contact />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Contact />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ContactContainer component', () => {
    expect(mountWrapper.find(ContactContainer)).toBePresent();
  });

  it('renders ContactInfoSection component', () => {
    expect(mountWrapper.find(ContactInfoSection)).toBePresent();
  });

  it('renders ConsultationSection component', () => {
    expect(mountWrapper.find(ConsultationSection)).toBePresent();
  });

  it('renders text "Get free consultation"', () => {
    expect(mountWrapper.find(ContactTitle)).toHaveText('Get a free consultation');
  });
});
