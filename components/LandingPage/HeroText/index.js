import React from 'react';
import styled from 'styled-components';

const HeroText = styled.section`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
    font-family: sans-serif;
    width: 480px
`;

export default () => (
  <HeroText>
    <h1>Moka Haiku: web app agency</h1>
  </HeroText>
);
