import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Container from '../../atoms/Container';
import Image from '../../atoms/Image';

const NavbarLogo = props => (
  <Container
    textAlign={'center'}
    backgroundColor={props.muiTheme.palette.accent1Color}
    mb={-1}
    pt={0.62}
  >
    <Image
      src={'../../../static/MokaHaiku_main.png'}
      alt={'Moka Haiku web development agency'}
      width={75}
    />
  </Container>
);

NavbarLogo.propTypes = {
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      accent1Color: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default muiThemeable()(NavbarLogo);
