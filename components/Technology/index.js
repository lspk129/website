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
        <h3>React.js</h3>
      </TechnologyItem>
    </TechnologyContainer>
  </div>
);

export default Technology;
