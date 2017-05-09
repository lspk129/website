import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HeroButton from './index';

describe('HeroButton', () => {
  it('renders corretly', () => {
    const wrapper = renderer.create(<HeroButton />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a button element', () => {
    const wrapper = shallow(<HeroButton />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('button');
  });

  it('renders "get a free consultation" in the content', () => {
    const wrapper = shallow(
      <HeroButton>get a free consultation</HeroButton>,
    );
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveText('get a free consultation');
  });
});
