import React from 'react';

import ContactContainer from './ContactContainer';
import ContactInfoSection from './ContactInfoSection';
import ConsultationSection from './ConsultationSection';
import ContactTitle from './ContactTitle';
import ContactForm from './ContactForm';

const Contact = () => (
  <ContactContainer>
    <ContactInfoSection>
      <ContactTitle>
        Get a free consultation
      </ContactTitle>
    </ContactInfoSection>
    <ConsultationSection>
      <ContactForm />
    </ConsultationSection>
  </ContactContainer>
);

export default Contact;
