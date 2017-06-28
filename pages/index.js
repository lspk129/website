import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { red400, cyan700, white, grey200 } from 'material-ui/styles/colors';
import { ThemeProvider } from 'styled-components';
import Scroll from 'react-scroll';
import { StickyContainer } from 'react-sticky';
import Head from 'next/head';

import NavbarLogo from '../components/organisms/NavbarLogo';
import Navbar from '../components/organisms/Navbar';
import Hero from '../components/organisms/Hero';
import Service from '../components/organisms/Service';
import Technology from '../components/organisms/Technology';
import Contact from '../components/organisms/Contact';

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

const themeProvider = (isMUI = false) => {
  const theme = {
    mainColor: cyan700,
    secondaryColor: red400,
    backgroundColor: grey200,
    textColor: white,
  };
  if (isMUI) {
    return {
      palette: {
        accent1Color: theme.mainColor,
        backgroundColor: theme.backgroundColor,
        whiteText: theme.textColor,
      },
    };
  }
  return {
    main: theme.mainColor,
    text: theme.textColor,
    background: theme.mainColor,
    secondaryBackground: theme.backgroundColor,
    flexboxgrid: {
      gutterWidth: 0,
    },
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
            <Head>
              <style>{`
                body {
                  margin: 0;
                  font-family: 'Roboto', sans-serif
                }
              `}</style>
            </Head>
            <NavbarLogo />
            <StickyContainer>
              <Navbar />
              <Hero />
              <Scroll.Element name={'Service'}>
                <Service />
              </Scroll.Element>
              <Scroll.Element name={'Technology'}>
                <Technology />
              </Scroll.Element>
              <Contact />
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
