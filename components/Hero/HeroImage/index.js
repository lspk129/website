import styled from 'styled-components';

const HomeImage = styled.div`
  // background-image: url("http://trendytheme.net/demo2/wp/69/multipage/wp-content/uploads/revslider/web-product-dark/webproduct_darkbg2.jpg");
  background: linear-gradient(210deg, #318EDF, #46c340);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-family: Roboto;
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 20% 25% 15% 15% 1fr;
`;

export default HomeImage;
