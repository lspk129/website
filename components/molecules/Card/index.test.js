import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Card from './';
import Division from '../../atoms/Division';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

describe('Card', () => {
  const shallowWrapper = shallow(<Card />);

  it('renders correctly', () => {
    const wrapper = renderer.create(<Card />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Card component', () => {
    expect(shallowWrapper).toBePresent();
  });

  it('renders Division component', () => {
    expect(shallowWrapper.find(Division)).toBePresent();
  });

  it('renders Heading component', () => {
    expect(shallowWrapper.find(Heading)).toBePresent();
  });

  it('renders Paragraph component', () => {
    expect(shallowWrapper.find(Paragraph)).toBePresent();
  });
});
