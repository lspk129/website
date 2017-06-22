import { createElement } from 'react';
import styled from 'styled-components';

const Text = styled(({ tag, hero, upperCase, children, ...props }) => createElement(tag, props, children))`
  text-align: center;

  ${({ tag, theme }) => tag === 'a' && `
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    &:hover { color: ${theme.main}}
  `}

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

  ${({ upperCase }) => upperCase && 'text-transform: uppercase'};
`;

Text.defaultProps = {
  tag: 'span',
};

export default Text;
