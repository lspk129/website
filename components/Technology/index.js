import React from 'react';
import { Padding } from 'styled-components-spacing';

import Subtitle from '../atoms/Subtitle';
import Heading from '../atoms/Heading';
import TechnologyContainer from './TechnologyContainer';
import TechnologyItem from './TechnologyItem';

const Technology = () => (
  <div>
    <Padding all={5} >
      <Subtitle>
      We use cutting-edge technologies
    </Subtitle>
    </Padding>
    <TechnologyContainer>
      <TechnologyItem>
        <img src="/static/React_logo.png" alt="React" />
        <Heading>React</Heading>
      </TechnologyItem>
      <TechnologyItem>
        <img src="/static/Meteor_logo.png" alt="Meteor" />
        <Heading>Meteor</Heading>
      </TechnologyItem>
      <TechnologyItem>
        <img src="/static/Nextjs_logo.png" alt="Next" />
        <Heading>Next.js</Heading>
      </TechnologyItem>
    </TechnologyContainer>
  </div>
);

export default Technology;
