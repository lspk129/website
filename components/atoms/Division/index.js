import styled from 'styled-components';

const Division = styled.div`
  ${props => props.textAlign && `text-align: ${props.textAlign}`};
  // margin properties
  ${props => props.m && `margin: ${props.m}rem;`}
  ${props => props.mx && `margin: 0rem ${props.mx}rem;`}
  ${props => props.my && `margin: ${props.my}rem 0rem;`}
  ${props => props.mt && `margin-top: ${props.mt}rem;`}
  ${props => props.mb && `margin-bottom: ${props.mb}rem;`}
  ${props => props.mr && `margin-right: ${props.mr}rem;`}
  ${props => props.ml && `margin-left: ${props.ml}rem;`}
  // padding properties
  ${props => props.p && `padding: ${props.p}rem;`}
  ${props => props.px && `padding: 0rem ${props.px}rem;`}
  ${props => props.py && `padding: ${props.py}rem 0rem;`}
  ${props => props.pt && `padding-top: ${props.pt}rem;`}
  ${props => props.pb && `padding-bottom: ${props.pb}rem;`}
  ${props => props.pr && `padding-right: ${props.pr}rem;`}
  ${props => props.pl && `padding-left: ${props.pl}rem;`}
  // background properties
  ${props => props.bg && `
    background-image: url(${props.src});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: grid;
  `}
`;

export default Division;
