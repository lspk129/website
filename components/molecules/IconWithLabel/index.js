import React from 'react';
import PropTypes from 'prop-types';

import PaperIcon from '../../atoms/PaperIcon';
import Division from '../../atoms/Division';
import Text from '../../atoms/Text';
import Link from '../../atoms/Link';

const IconWithLabel = ({ icon, label, tag, href }) => (
  <Division m={2} display={'flex'}>
    <Link href={href || null} target={'_blank'}>
      <PaperIcon circle>
        {icon}
      </PaperIcon>
      <Division px={1} alignSelf={'center'}>
        <Text tag={tag}>
          {label}
        </Text>
      </Division>
    </Link>
  </Division>
);

IconWithLabel.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  tag: PropTypes.string,
  href: PropTypes.string,
};

IconWithLabel.defaultProps = {
  icon: '',
  label: '',
  tag: 'span',
  href: '',
};

export default IconWithLabel;
