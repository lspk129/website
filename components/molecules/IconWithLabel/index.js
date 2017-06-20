import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import PaperIcons from '../../atoms/PaperIcons';
import Division from '../../atoms/Division';
import Title from '../../atoms/Title';

const IconWithLabel = ({ icon, label }) => (
  <Division m={2}>
    <Row center={'xs'}>
      <Col xs>
        <Row>
          <PaperIcons circle>
            {icon}
          </PaperIcons>
          <Division px={1}>
            <Title tag={'p'}>
              {label}
            </Title>
          </Division>
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
