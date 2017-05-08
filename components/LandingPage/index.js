import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-image: url("http://trendytheme.net/demo2/wp/69/multipage/wp-content/uploads/revslider/web-product-dark/webproduct_darkbg2.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh
`;

export default () => (
  <div>
    <Wrapper />
  </div>
);
