import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import Sticky from 'react-sticky';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Row, Col } from 'react-styled-flexboxgrid';

import AnimatedBorder from '../../atoms/AnimatedBorder';
import ColStyled from '../../atoms/ColStyled';
import Division from '../../atoms/Division';

const Navbar = props => (
  <Sticky>
    {({ style }) => (
      <Division
        style={style}
        bgColor={props.muiTheme.palette.accent1Color}
        zIndex={2}
      >
        <Row center={'xs'}>
          <Col>
            <AnimatedBorder onClick={() => Scroll.animateScroll.scrollToTop()}>
              HOME
            </AnimatedBorder>
          </Col>
          <Col>
            <Scroll.Link to={'Service'} spy smooth duration={500}>
              <AnimatedBorder>
                SERVICES
              </AnimatedBorder>
            </Scroll.Link>
          </Col>
          <Col>
            <Scroll.Link to={'Technology'} spy smooth duration={500}>
              <AnimatedBorder>
                TECHNOLOGIES
              </AnimatedBorder>
            </Scroll.Link>
          </Col>
          <ColStyled align={'center'}>
            <RaisedButton
              label={'Contact us'}
              labelColor={props.muiTheme.palette.accent1Color}
              labelStyle={{ fontSize: '15px' }}
              onClick={() => Scroll.animateScroll.scrollToBottom()}
            />
          </ColStyled>
        </Row>
      </Division>
    )}
  </Sticky>
);

Navbar.propTypes = {
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      accent1Color: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default muiThemeable()(Navbar);
