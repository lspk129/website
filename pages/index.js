import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import { red500 } from 'material-ui/styles/colors';

import HeroImage from '../components/Hero/HeroImage';
import HeroTitle from '../components/Hero/HeroTitle';
import HeroSubtitle from '../components/Hero/HeroSubtitle';

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

const muiTheme = {
  palette: {
    accent1Color: red500,
  },
};

const styles = {
  wrapper: {
    color: 'red',
  },
};

class Hero extends Component {
  static getInitialProps({ req }) {
    let userAgent;
    if (process.browser) {
      userAgent = navigator.userAgent;
    } else {
      userAgent = req.headers['user-agent'];
    }
    return { userAgent };
  }

  render() {
    const { userAgent } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent, ...muiTheme })}>

        <HeroImage>
          <div className="header" />
          <div className="content">
            <HeroTitle>
              Moka Haiku:<br />web app agency
            </HeroTitle>
            <HeroSubtitle>
              Creating fast & interactive web applications with React and Meteor
            </HeroSubtitle>
            <RaisedButton label="get a free consultation" secondary={Boolean(true)} />
          </div>
          <style jsx>{`
            .content {
              grid-row: 2 / 3;
              justify-self: center;
              text-align: center;
            }
          `}</style>
        </HeroImage>
      </MuiThemeProvider>
    );
  }
}

export default Hero;
