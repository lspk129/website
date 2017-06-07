import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import muiThemeable from 'material-ui/styles/muiThemeable';

import ContactContainer from './ContactContainer';
import ContactInfoSection from './ContactInfoSection';
import ConsultationSection from './ConsultationSection';
import ContactTitle from './ContactTitle';
import ContactForm from './ContactForm';
import RaisedButtonStyled from './Components/RaisedButtonStyled';
import FlexboxLine from './Components/FlexboxLine';
import Paragraph from './Components/Paragraph';
import PaperIcon from './Components/PaperIcons';
import FontAwesomeIcon from './Components/FontAwesomeIcon';

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
            <FlexboxLine>
              <PaperIcon circle>
                <FontAwesomeIcon className="fa fa-envelope" />
              </PaperIcon>
              <Paragraph>info@mokahaiku.com</Paragraph>
            </FlexboxLine>
            <FlexboxLine>
              <PaperIcon circle >
                <FontAwesomeIcon className="fa fa-twitter" />
              </PaperIcon>
              <Paragraph>@mokahaiku</Paragraph>
            </FlexboxLine>
            <FlexboxLine>
              <PaperIcon circle>
                <FontAwesomeIcon className="fa fa-globe" />
              </PaperIcon>
              <Paragraph>www.mokahaiku.com</Paragraph>
            </FlexboxLine>
          </ContactForm>
        </ContactInfoSection>

        <ConsultationSection>
          <ContactTitle>
            Get a free consultation
          </ContactTitle>
          <ContactForm>
            <FlexboxLine between>
              <TextField floatingLabelText="Name" />
              <TextField floatingLabelText="Your email" />
            </FlexboxLine>
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
            <RaisedButtonStyled label="Send" secondary />
          </ContactForm>
        </ConsultationSection>
      </ContactContainer>
    );
  }
}

export default muiThemeable()(Contact);
