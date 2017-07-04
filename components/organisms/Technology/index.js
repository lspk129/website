import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Card from '../../molecules/Card';
import Text from '../../atoms/Text';
import Container from '../../atoms/Container';
import ContainerHover from '../../atoms/ContainerHover';

const Technology = () => (
  <Container pb={3}>
    <Container py={3}>
      <Text tag={'h2'}>
        We use cutting-edge technologies
      </Text>
    </Container>
    <Row center={'xs'}>
      <Col md={3} sm={4} xs={12}>
        <ContainerHover scale={1.1}>
          <Card
            image={<img src="/static/React_logo.png" alt="React" />}
            label={'React'}
          />
        </ContainerHover>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <ContainerHover scale={1.1}>
          <Card
            image={<img src="/static/Meteor_logo.png" alt="Meteor" />}
            label={'Meteor'}
          />
        </ContainerHover>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <ContainerHover scale={1.1}>
          <Card
            image={<img src="/static/Nextjs_logo.png" alt="Next.js" />}
            label={'Next.js'}
          />
        </ContainerHover>
      </Col>
    </Row>
  </Container>
);

export default Technology;
