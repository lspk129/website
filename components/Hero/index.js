import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Margin, Padding } from 'styled-components-spacing';

import HeroImage from './HeroImage';
import HeroTitle from './HeroTitle';
import Subtitle from '../atoms/Subtitle';

const Hero = () => (
  <HeroImage>
    <Margin all={5}>
      <HeroTitle>
        Moka Haiku:<br />web app agency
      </HeroTitle>
      <Padding bottom={4}>
        {/* <HeroSubtitle>*/}
        <Subtitle white>
          Creating fast & interactive web applications with React and Meteor
        </Subtitle>
        {/* </HeroSubtitle>*/}
      </Padding>
      <RaisedButton label="get a free consultation" secondary />
    </Margin>
  </HeroImage>
);

export default Hero;
