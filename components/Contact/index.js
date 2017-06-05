import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import ContactContainer from './ContactContainer';
import ContactInfoSection from './ContactInfoSection';
import ConsultationSection from './ConsultationSection';
import ContactTitle from './ContactTitle';
import ContactForm from './ContactForm';
import RaisedButtonWithStyle from './ContactForm/RaisedButtonWithStyle';
import FlexComponent from './ContactForm/FlexComponent';
import PTag from './ContactForm/PTag';

class Contact extends Component {
  state = {
    value: '',
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <ContactContainer>
        <ContactInfoSection>
          <ContactTitle>
            Contact us
          </ContactTitle>
          <ContactForm center>
            <FlexComponent>
              <FloatingActionButton secondary>
                <i className="fa fa-envelope" />
              </FloatingActionButton>
              <PTag>info@mokahaiku.com</PTag>
            </FlexComponent>
            <FlexComponent>
              <FloatingActionButton secondary>
                <i className="fa fa-twitter" />
              </FloatingActionButton>
              <PTag>@mokahaiku</PTag>
            </FlexComponent>
            <FlexComponent>
              <FloatingActionButton secondary>
                <i className="fa fa-globe" />
              </FloatingActionButton>
              <PTag>www.mokahaiku.com</PTag>
            </FlexComponent>
          </ContactForm>
        </ContactInfoSection>

        <ConsultationSection>
          <ContactTitle>
            Get a free consultation
          </ContactTitle>
          <ContactForm>
            <FlexComponent between>
              <TextField floatingLabelText="Name" />
              <TextField floatingLabelText="Your email" />
            </FlexComponent>
            <SelectField
              floatingLabelText="Choose a subject"
              value={this.state.value}
              onChange={this.handleChange}
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
                fullWidth
              />
            )}
            <RaisedButtonWithStyle label="Send" secondary />
          </ContactForm>
        </ConsultationSection>
      </ContactContainer>
    );
  }
}

export default Contact;
