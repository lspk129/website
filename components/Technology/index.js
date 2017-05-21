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
        <img src="../../static/react_logo.png" alt="React" />
        <h3>React Js</h3>
      </TechnologyItem>
      <TechnologyItem>
        <img src="../../static/meteor_logo.png" alt="Meteor" />
        <h3>Meteor Js</h3>
      </TechnologyItem>
      <TechnologyItem>
        <img src="../../static/next_logo.png" alt="Next" />
        <h3>Next.js</h3>
      </TechnologyItem>
    </TechnologyContainer>
  </div>
);

export default Technology;
