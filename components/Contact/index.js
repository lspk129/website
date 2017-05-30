import React from 'react';
import TextField from 'material-ui/TextField';

import ContactContainer from './ContactContainer';
import ContactInfoSection from './ContactInfoSection';
import ConsultationSection from './ConsultationSection';
import ContactTitle from './ContactTitle';
import ContactForm from './ContactForm';

const styles = {
  margin: '0px 10px',
};

const Contact = () => (
  <ContactContainer>
    <ContactInfoSection>
      <ContactTitle>
        Get a free consultation
      </ContactTitle>
    </ContactInfoSection>
    <ConsultationSection>
      <ContactForm>
        <TextField style={styles} floatingLabelText="Name" />
        <TextField style={styles} floatingLabelText="Your email" />
      </ContactForm>
    </ConsultationSection>
  </ContactContainer>
);

export default Contact;
