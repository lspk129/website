import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import HeroImage from './HeroImage';
import HeroContainer from './HeroContainer';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';

const Hero = () => (
  <HeroImage>
    <HeroContainer>
      <HeroTitle>
        Moka Haiku:<br />web app agency
      </HeroTitle>
      <HeroSubtitle>
        Creating fast & interactive web applications with React and Meteor
      </HeroSubtitle>
      <RaisedButton label="get a free consultation" secondary />
    </HeroContainer>
  </HeroImage>
);

export default Hero;
