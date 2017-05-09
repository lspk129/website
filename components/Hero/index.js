import React from 'react';

import HeroImage from './HeroImage';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroButton from './HeroButton';

export default () => (
  <HeroImage>
    <HeroTitle>
      Moka Haiku:<br />web app agency
    </HeroTitle>
    <HeroSubtitle>
      Creating fast & interactive web applications with React and Meteor
    </HeroSubtitle>
    <HeroButton>get a free consultation</HeroButton>
  </HeroImage>
);

/*
css grid

*/
