import React from 'react';
import styled from 'styled-components';

import ServiceContainer from '../ServiceContainer';

const StyledSection = styled.div`
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    .material-icons {
      color: ${props => props.theme.text};
    }
  };
  .material-icons {
    transition: all 0.5s ease-in-out;
    font-size: 48px;
    padding: 20px ;
    color: ${props => props.theme.background};
  }
  p {
    padding: 10px 50px;
  }
`;

const ServiceList = () => (
  <ServiceContainer>
    <StyledSection>
      <div><i className="material-icons">desktop_mac</i></div>
      <h3>Web development</h3>
      <p>We help you build fast, functional, performance oriented websites and web apps</p>
    </StyledSection>
    <StyledSection>
      <div><i className="material-icons">color_lens</i></div>
      <h3>Web design</h3>
      <p>We are creating unique and adaptive designs to engage customers</p>
    </StyledSection>
  </ServiceContainer>
);

export default ServiceList;
