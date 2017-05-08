import React from 'react';
import styled from 'styled-components';

const HeroSubtitle = styled.section`
    text-align: center;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: sans-serif;
`;


export default () => (
  <HeroSubtitle>
    <h2>Creating fast & interactive web applications with React and Meteor</h2>
  </HeroSubtitle>
);
