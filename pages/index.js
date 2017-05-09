import React from 'react';
import Head from 'next/head';

import Hero from '../components/Hero';


export default () => (
  <div>
    <Head>
      <title>Moka Haiku</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
    </Head>

    <Hero />
  </div>

);
