import React from 'react';

import ServiceHeader from './ServiceHeader';
import ServiceContainer from './ServiceContainer';
import ServiceItem from './ServiceItem';

const ServiceSection = () => (
  <div>
    <ServiceHeader>
      What we do
    </ServiceHeader>
    <ServiceContainer>
      <ServiceItem>
        <div className="web-dev">
          <i className="material-icons">desktop_mac</i>
          <h3>Web development</h3>
          <p>We help you build fast, functional, performance oriented websites and web apps</p>
        </div>
      </ServiceItem>
      <ServiceItem>
        <div className="web-design">
          <i className="material-icons">color_lens</i>
          <h3>Web design</h3>
          <p>We are creating unique and adaptive designs to engage customers</p>
        </div>
      </ServiceItem>
    </ServiceContainer>
  </div>
);

export default ServiceSection;
