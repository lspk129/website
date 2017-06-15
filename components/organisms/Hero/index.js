import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Division from '../../atoms/Division';
import Title from '../../atoms/Title';
import Subtitle from '../../atoms/Subtitle';

const Hero = () => (
  <Division bg src={'../../../static/Hero_image.jpg'} py={4}>
    <Title hero>
      Moka Haiku:<br />web app agency
    </Title>
    <Subtitle hero>
      Creating fast & interactive web applications with React and Meteor
    </Subtitle>
    <Division textAlign={'center'} pt={2}>
      <RaisedButton label={'get a free consultation'} secondary />
    </Division>
  </Division>
);

export default Hero;
