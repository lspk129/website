import React from 'react';

import TechnologyHeader from './TechnologyHeader';
import TechnologyContainer from './TechnologyContainer';
import TechnologyItem from './TechnologyItem';

const Technology = () => (
  <div>
    <TechnologyHeader>
      We use cutting-edge technologies
    </TechnologyHeader>
    <TechnologyContainer>
      <TechnologyItem>
        <img src="/static/React_logo.png" alt="React" />
        <h3>React</h3>
      </TechnologyItem>
      <TechnologyItem>
        <img src="/static/Meteor_logo.png" alt="Meteor" />
        <h3>Meteor</h3>
      </TechnologyItem>
      <TechnologyItem>
        <img src="/static/Nextjs_logo.png" alt="Next" />
        <h3>Next.js</h3>
      </TechnologyItem>
    </TechnologyContainer>
  </div>
);

export default Technology;
