import React from 'react';
import PropTypes from 'prop-types';

import Division from '../../atoms/Division';
import Title from '../../atoms/Title';
import Paragraph from '../../atoms/Paragraph';

const Card = ({ image, label, text }) => (
  <Division textAlign={'center'} py={3} pr={1} pl={1}>
    {image}
    <Title tag={'h3'}>{label}</Title>
    <Paragraph>{text}</Paragraph>
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
