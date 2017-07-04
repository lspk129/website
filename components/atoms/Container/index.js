import styled from 'styled-components';

const Container = styled.div`
  ${({ display }) => display && `display: ${display}`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};

  /* margin properties */
  ${({ m }) => m && `margin: ${m}rem;`}
  ${({ mx }) => mx && `margin: 0rem ${mx}rem;`}
  ${({ my }) => my && `margin: ${my}rem 0rem;`}
  ${({ mt }) => mt && `margin-top: ${mt}rem;`}
  ${({ mb }) => mb && `margin-bottom: ${mb}rem;`}
  ${({ mr }) => mr && `margin-right: ${mr}rem;`}
  ${({ ml }) => ml && `margin-left: ${ml}rem;`}

  /* padding properties */
  ${({ p }) => p && `padding: ${p}rem;`}
  ${({ px }) => px && `padding: 0rem ${px}rem;`}
  ${({ py }) => py && `padding: ${py}rem 0rem;`}
  ${({ pt }) => pt && `padding-top: ${pt}rem;`}
  ${({ pb }) => pb && `padding-bottom: ${pb}rem;`}
  ${({ pr }) => pr && `padding-right: ${pr}rem;`}
  ${({ pl }) => pl && `padding-left: ${pl}rem;`}

  /* background properties */
  ${({ bg, src }) => bg && `
    background-image: url(${src});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: grid;
  `}
  ${({ backgroundColor }) => backgroundColor && `
    background-color: ${backgroundColor};
  `}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
`;

export default Container;
