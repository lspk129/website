import React from 'react';
import { MdDesktopMac, MdColorLens } from 'react-icons/lib/md';
import { Padding } from 'styled-components-spacing';

import ServiceImage from './ServiceImage';
import ServiceContainer from './ServiceContainer';
import ServiceItem from './ServiceItem';
import Subtitle from '../atoms/Subtitle';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const Service = () => (
  <ServiceImage>
    <Padding all={5}>
      <Subtitle>
        What we do
      </Subtitle>
    </Padding>
    <ServiceContainer>
      <ServiceItem>
        <MdDesktopMac className={'icons'} size={48} />
        <Heading>Web development</Heading>
        <Paragraph>We help you build fast, functional, performance oriented websites and web apps</Paragraph>
      </ServiceItem>
      <ServiceItem>
        <MdColorLens className={'icons'} size={48} />
        <Heading>Web design</Heading>
        <Paragraph>We are creating unique and adaptive designs to engage customers</Paragraph>
      </ServiceItem>
    </ServiceContainer>
  </ServiceImage>
);

export default Service;
