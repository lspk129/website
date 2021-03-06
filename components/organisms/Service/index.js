import React from 'react';
import { MdDesktopMac, MdColorLens } from 'react-icons/lib/md';
import { Row, Col } from 'react-styled-flexboxgrid';

import Card from '../../molecules/Card';
import Container from '../../atoms/Container';
import ContainerHover from '../../atoms/ContainerHover';
import Text from '../../atoms/Text';

const Service = () => (
  <Container bg src={'../../../static/Service_image.jpg'} pb={3}>
    <Container py={3}>
      <Text tag={'h2'}>What we do</Text>
    </Container>
    <Row center={'xs'}>
      <Col md={3} sm={4} xs={12}>
        <ContainerHover backgroundColor>
          <Card
            image={<MdDesktopMac className={'icons'} size={48} />}
            label={'Web development'}
            text={'We help you build fast, functional, performance oriented websites and web apps'}
          />
        </ContainerHover>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <ContainerHover backgroundColor>
          <Card
            image={<MdColorLens className={'icons'} size={48} />}
            label={'Web design'}
            text={'We are creating unique and adaptive designs to engage customers'}
          />
        </ContainerHover>
      </Col>
    </Row>
  </Container>
);

export default Service;
