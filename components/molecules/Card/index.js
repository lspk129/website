import React from 'react';
import PropTypes from 'prop-types';

import Division from '../../atoms/Division';
import Text from '../../atoms/Text';

const Card = ({ image, label, text }) => (
  <Division textAlign={'center'} py={3} pr={1} pl={1}>
    {image}
    <Text tag={'h3'}>{label}</Text>
    <Text tag={'p'}>{text}</Text>
  </Division>
);

Card.propTypes = {
  image: PropTypes.node,
  label: PropTypes.string,
  text: PropTypes.string,
};

Card.defaultProps = {
  image: '',
  label: '',
  text: '',
};

export default Card;
