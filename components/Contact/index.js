import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Row, Column } from 'hedron';
import RaisedButton from 'material-ui/RaisedButton';

import ContactTitle from './ContactTitle';
import Paragraph from './Components/Paragraph';
import PaperIcons from './Components/PaperIcons';
import FontAwesomeIcon from './Components/FontAwesomeIcon';
import StyledColumn from './StyledColumn';

class Contact extends Component {
  state = {
    value: '',
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <Row>
        <StyledColumn md={6}>
          <ContactTitle>
            Contact us
          </ContactTitle>


          <Row justifyContent={'center'}>
            <Column lg={7} md={9} sm={8}>
              <Row >
                <PaperIcons circle>
                  <FontAwesomeIcon className="fa fa-envelope" />
                </PaperIcons>
                <Paragraph>info@mokahaiku.com</Paragraph>
              </Row>
            </Column>
          </Row>

          <Row justifyContent={'center'}>
            <Column lg={7} md={9} sm={8}>
              <Row >
                <PaperIcons circle >
                  <FontAwesomeIcon className="fa fa-twitter" />
                </PaperIcons>
                <Paragraph>@mokahaiku</Paragraph>
              </Row>
            </Column>
          </Row>

          <Row justifyContent={'center'}>
            <Column lg={7} md={9} sm={8}>
              <Row >
                <PaperIcons circle>
                  <FontAwesomeIcon className="fa fa-globe" />
                </PaperIcons>
                <Paragraph>www.mokahaiku.com</Paragraph>
              </Row>
            </Column>
          </Row>

        </StyledColumn>

        <Column md={6}>
          <ContactTitle>
            Get a free consultation
          </ContactTitle>
          <form>
            <Row>
              <Column md={6}>
                <TextField floatingLabelText="Name" fullWidth />
              </Column>
              <Column md={6}>
                <TextField floatingLabelText="Your email" fullWidth />
              </Column>
              <Column>
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
              </Column>
              <Column>
                <RaisedButton label={'Send'} secondary />
              </Column>
            </Row>
          </form>
        </Column>
      </Row>
    );
  }
}

export default muiThemeable()(Contact);
