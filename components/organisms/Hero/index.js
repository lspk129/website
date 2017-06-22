import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Division from '../../atoms/Division';
import Text from '../../atoms/Text';

const Hero = () => (
  <Division bg src={'../../../static/Hero_image.jpg'} py={4}>
    <Text tag={'h1'} hero>
      Moka Haiku:<br />web app agency
    </Text>
    <Text tag={'h2'} hero>
      Creating fast & interactive web applications with React and Meteor
    </Text>
    <Division textAlign={'center'} pt={2}>
      <RaisedButton label={'get a free consultation'} secondary />
    </Division>
  </Division>
);

export default Hero;
