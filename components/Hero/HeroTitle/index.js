import styled from 'styled-components';

const HeroTitle = styled.h1`
  color: ${props => props.theme.text};
  font-size: 4rem;
  white-space: nowrap;
  font-weight: bold;
  text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.4);
  line-height: 4rem;
`;

export default HeroTitle;
