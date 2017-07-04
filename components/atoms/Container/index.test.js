import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Container from './';

describe('Container', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveTagName('div');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with display props', () => {
    const wrapper = mount(<Container display={'grid'} />);
    expect(wrapper).toHaveProp('display', 'grid');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with textAlign props', () => {
    const wrapper = mount(<Container textAlign={'center'} />);
    expect(wrapper).toHaveProp('textAlign', 'center');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with alignSelf props', () => {
    const wrapper = mount(<Container alignSelf={'flex-end'} />);
    expect(wrapper).toHaveProp('alignSelf', 'flex-end');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with alignItems props', () => {
    const wrapper = mount(<Container alignItems={'flex-end'} />);
    expect(wrapper).toHaveProp('alignItems', 'flex-end');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with margin props', () => {
    const wrapper = mount(<Container mx={'1'} />);
    expect(wrapper).toHaveProp('mx', '1');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with margin left and right props', () => {
    const wrapper = mount(<Container mx={2} />);
    expect(wrapper).toHaveProp('mx', 2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with margin top and bottom props', () => {
    const wrapper = mount(<Container my={3} />);
    expect(wrapper).toHaveProp('my', 3);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render with margin top props', () => {
    const wrapper = mount(<Container mt={4} />);
    expect(wrapper).toHaveProp('mt', 4);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with margin bottom props', () => {
    const wrapper = mount(<Container mb={5} />);
    expect(wrapper).toHaveProp('mb', 5);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with margin right props', () => {
    const wrapper = mount(<Container mr={6} />);
    expect(wrapper).toHaveProp('mr', 6);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with margin left props', () => {
    const wrapper = mount(<Container ml={7} />);
    expect(wrapper).toHaveProp('ml', 7);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with padding props', () => {
    const wrapper = mount(<Container p={8} />);
    expect(wrapper).toHaveProp('p', 8);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Container with padding left and right props', () => {
    const wrapper = mount(<Container px={7} />);
    expect(wrapper).toHaveProp('px', 7);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with padding top and bottom props', () => {
    const wrapper = mount(<Container py={6} />);
    expect(wrapper).toHaveProp('py', 6);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with padding top props', () => {
    const wrapper = mount(<Container pt={5} />);
    expect(wrapper).toHaveProp('pt', 5);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with padding bottom props', () => {
    const wrapper = mount(<Container pb={4} />);
    expect(wrapper).toHaveProp('pb', 4);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with padding right props', () => {
    const wrapper = mount(<Container pr={3} />);
    expect(wrapper).toHaveProp('pr', 3);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with padding left props', () => {
    const wrapper = mount(<Container pl={2} />);
    expect(wrapper).toHaveProp('pl', 2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with background color props', () => {
    const wrapper = mount(<Container backgroundColor={'#BADA55'} />);
    expect(wrapper).toHaveProp('backgroundColor', '#BADA55');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with background image source props', () => {
    const wrapper = mount(<Container src={'../../../static/Service_image.jpg'} />);
    expect(wrapper).toHaveProp('src', '../../../static/Service_image.jpg');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders with z-index props', () => {
    const wrapper = mount(<Container zIndex={10} />);
    expect(wrapper).toHaveProp('zIndex', 10);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
