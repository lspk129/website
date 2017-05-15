import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import BodyContainer from '../components/Body/index';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
          {styleTags}
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
        </Head>
        <BodyContainer>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </BodyContainer>
      </html>
    );
  }
}
