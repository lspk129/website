import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Card from '../../molecules/Card';
import Subtitle from '../../atoms/Subtitle';
import Division from '../../atoms/Division';
import DivisionHover from '../../atoms/DivisionHover';

const Technology = () => (
  <Division pb={3}>
    <Division py={3}>
      <Subtitle>
        We use cutting-edge technologies
      </Subtitle>
    </Division>
    <Row center={'xs'}>
      <Col md={3} sm={4} xs={12}>
        <DivisionHover scale>
          <Card
            image={<img src="/static/React_logo.png" alt="React" />}
            label={'React'}
          />
        </DivisionHover>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <DivisionHover scale>
          <Card
            image={<img src="/static/Meteor_logo.png" alt="Meteor" />}
            label={'Meteor'}
          />
        </DivisionHover>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <DivisionHover scale>
          <Card
            image={<img src="/static/Nextjs_logo.png" alt="Next.js" />}
            label={'Next.js'}
          />
        </DivisionHover>
      </Col>
    </Row>
  </Division>
);

export default Technology;
