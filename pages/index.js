import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import { red400, black, cyan700, white } from 'material-ui/styles/colors';
import { ThemeProvider } from 'styled-components';

import HeroImage from '../components/Hero/HeroImage';
import HeroTitle from '../components/Hero/HeroTitle';
import HeroSubtitle from '../components/Hero/HeroSubtitle';
import HeroContainer from '../components/Hero/HeroContainer';
import HeroHeader from '../components/Hero/HeroHeader';

import ServiceSection from '../components/Service';

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

const themeProvider = (isMUI = false) => {
  const theme = {
    mainColor: cyan700,
    secondaryColor: red400,
    backgroundColor: cyan700,
    textColor: white,
  };
  if (isMUI) return { palette: { accent1Color: theme.mainColor } };
  return {
    main: theme.mainColor,
    text: theme.textColor,
    background: theme.mainColor,
  };
};

class Hero extends Component {
  static getInitialProps({ req }) {
    const userAgent = process.browser ? navigator.userAgent : req.headers['user-agent'];
    return { userAgent };
  }

  render() {
    const { userAgent } = this.props;
    const isMUI = true;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...themeProvider(isMUI) })}>
        <ThemeProvider theme={themeProvider()}>
          <div>
            <HeroImage>
              <HeroHeader />
              <HeroContainer>
                <HeroTitle>
              Moka Haiku:<br />web app agency
            </HeroTitle>
                <HeroSubtitle>
              Creating fast & interactive web applications with React and Meteor
            </HeroSubtitle>
                <RaisedButton label="get a free consultation" secondary />
              </HeroContainer>
            </HeroImage>
            <ServiceSection />
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

Hero.propTypes = {
  userAgent: PropTypes.string,
};

Hero.defaultProps = {
  userAgent: '',
};

export default Hero;
