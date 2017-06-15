import React from 'react';
import { MdDesktopMac, MdColorLens } from 'react-icons/lib/md';
import { Row, Col } from 'react-styled-flexboxgrid';

import Card from '../../molecules/Card';
import Division from '../../atoms/Division';
import Subtitle from '../../atoms/Subtitle';
import DivisionHover from '../../atoms/DivisionHover';

const Service = () => (
  <Division bg src={'../../../static/Service_image.jpg'} pb={3}>
    <Division my={3}>
      <Subtitle>What we do</Subtitle>
    </Division>
    <Row center={'xs'}>
      <Col md={3} sm={4} xs={12}>
        <DivisionHover>
          <Card
            image={<MdDesktopMac className={'icons'} size={48} />}
            label={'Web development'}
            text={'We help you build fast, functional, performance oriented websites and web apps'}
          />
        </DivisionHover>
      </Col>
      <Col md={3} sm={4} xs={12}>
        <DivisionHover>
          <Card
            image={<MdColorLens className={'icons'} size={48} />}
            label={'Web design'}
            text={'We are creating unique and adaptive designs to engage customers'}
          />
        </DivisionHover>
      </Col>
    </Row>
  </Division>
);

export default Service;
