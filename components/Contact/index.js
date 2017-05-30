import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import ContactContainer from './ContactContainer';
import ContactInfoSection from './ContactInfoSection';
import ConsultationSection from './ConsultationSection';
import ContactTitle from './ContactTitle';
import ContactForm from './ContactForm';

const styles = {
  margin: '20px 20px',
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ value });
  }

  render() {
    return (
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
            <SelectField
              floatingLabelText="Choose a subject"
              value={this.state.value}
              onChange={this.handleChange}
              style={styles}
              fullWidth
            >
              <MenuItem value={1} primaryText="I want an introduction to your services..." />
              <MenuItem value={2} primaryText="I want a free price quote..." />
              <MenuItem value={3} primaryText="I want to ask a question" />
            </SelectField>
            {this.state.value === 3 && (
              <TextField
                floatingLabelText="Your question"
                multiLine
                rows={4}
                style={styles}
                fullWidth
              />
            )}
            <RaisedButton style={styles} label="Send" secondary />
          </ContactForm>
        </ConsultationSection>
      </ContactContainer>
    );
  }
}

export default Contact;
