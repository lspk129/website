import React from 'react';
import styled from 'styled-components';

const HeroSubtitle = styled.h2`
    text-align: center;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;


export default ({ children }) => (
  <HeroSubtitle>
    { children }
  </HeroSubtitle>
);
