import React from 'react';
import PropTypes from 'prop-types';

import PaperIcon from '../../atoms/PaperIcon';
import Division from '../../atoms/Division';
import Text from '../../atoms/Text';

const IconWithLabel = ({ icon, label, tag }) => (
  <Division m={2} display={'flex'}>
    <PaperIcon circle>
      {icon}
    </PaperIcon>
    <Division px={1} alignSelf={'center'}>
      <Text tag={tag}>
        {label}
      </Text>
    </Division>
  </Division>
);

IconWithLabel.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  tag: PropTypes.string,
};

IconWithLabel.defaultProps = {
  icon: '',
  label: '',
  tag: 'span',
};

export default IconWithLabel;
