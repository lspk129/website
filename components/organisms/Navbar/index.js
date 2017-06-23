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
import Text from '../../atoms/Text';

const Navbar = props => (
  <Sticky>
    {({ style }) => (
      <Division
        style={style}
        backgroundColor={props.muiTheme.palette.accent1Color}
        zIndex={2}
      >
        <Row center={'xs'}>
          <Col>
            <AnimatedBorder
              color={props.muiTheme.palette.whiteText}
              onClick={() => Scroll.animateScroll.scrollToTop()}
            >
              <Text upperCase>Home</Text>

            </AnimatedBorder>
          </Col>
          <Col>
            <Scroll.Link to={'Service'} spy smooth duration={500}>
              <AnimatedBorder color={props.muiTheme.palette.whiteText}>
                <Text upperCase>Services</Text>
              </AnimatedBorder>
            </Scroll.Link>
          </Col>
          <Col>
            <Scroll.Link to={'Technology'} spy smooth duration={500}>
              <AnimatedBorder color={props.muiTheme.palette.whiteText}>
                <Text upperCase>Technologies</Text>
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
      whiteText: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default muiThemeable()(Navbar);
