import React from 'react';
import { MdDesktopMac, MdColorLens } from 'react-icons/lib/md';

import ServiceImage from './ServiceImage';
import ServiceHeader from './ServiceHeader';
import ServiceContainer from './ServiceContainer';
import ServiceItem from './ServiceItem';

const Service = () => (
  <ServiceImage>
    <ServiceHeader>
      What we do
    </ServiceHeader>
    <ServiceContainer>
      <ServiceItem>
        <MdDesktopMac className={'icons'} size={48} />
        <h3>Web development</h3>
        <p>We help you build fast, functional, performance oriented websites and web apps</p>
      </ServiceItem>
      <ServiceItem>
        <MdColorLens className={'icons'} size={48} />
        <h3>Web design</h3>
        <p>We are creating unique and adaptive designs to engage customers</p>
      </ServiceItem>
    </ServiceContainer>
  </ServiceImage>
);

export default Service;
