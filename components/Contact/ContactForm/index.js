import styled from 'styled-components';

const ContactForm = styled.form`
  display: grid;
  grid-gap: 20px;
  justify-content: ${props => (props.center ? 'center' : '')};
  padding: 40px 50px;
`;

export default ContactForm;
