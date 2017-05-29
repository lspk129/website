import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { red400, cyan700, white } from 'material-ui/styles/colors';
import { ThemeProvider } from 'styled-components';
import Scroll from 'react-scroll';
import { StickyContainer } from 'react-sticky';

import { Navbar, NavbarLogo } from '../components/Navbar';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Technology from '../components/Technology';

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

class IndexPage extends Component {
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
            <NavbarLogo />
            <StickyContainer>
              <Navbar />
              <Scroll.Element name="Hero">
                <Hero />
              </Scroll.Element>
              <Scroll.Element name="Service">
                <Service />
              </Scroll.Element>
              <Scroll.Element name="Technology">
                <Technology />
              </Scroll.Element>
            </StickyContainer>
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

IndexPage.propTypes = {
  userAgent: PropTypes.string,
};

IndexPage.defaultProps = {
  userAgent: '',
};

export default IndexPage;
