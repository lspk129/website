import React from 'react';
import styled from 'styled-components';

const Title = styled(({ tag, children, ...props }) => React.createElement(tag, props, children))`
  text-align: center;

  ${({ tag, hero, theme }) => tag === 'h1' && `
    ${hero && `
      color: ${theme.text};
      font-size: 4rem;
      white-space: nowrap;
      font-weight: bold;
      text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.4);
      line-height: 4rem;
    `}
  `}

  ${({ tag, hero, theme }) => tag === 'h2' && `
    ${hero && `
      color: ${theme.text};
      text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
    `}
  `}

  ${({ tag, upperCase }) => tag === 'h3' && `
    ${upperCase && 'text-transform: uppercase'}
  `}
`;

Title.defaultProps = {
  tag: 'h1',
};

export default Title;
