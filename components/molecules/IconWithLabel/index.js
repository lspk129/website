import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import PaperIcons from '../../atoms/PaperIcons';
import Division from '../../atoms/Division';
import Paragraph from '../../atoms/Paragraph';

const IconWithLabel = ({ icon, label }) => (
  <Division m={2}>
    <Row center={'xs'}>
      <Col xs>
        <Row>
          <PaperIcons circle>
            {icon}
          </PaperIcons>
          <Paragraph px={1}>
            {label}
          </Paragraph>
        </Row>
      </Col>
    </Row>
  </Division>
);

IconWithLabel.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
};

IconWithLabel.defaultProps = {
  icon: '',
  label: '',
};

export default IconWithLabel;
