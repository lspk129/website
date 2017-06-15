import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from 'hedron';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { FaEnvelope, FaTwitter, FaGlobe } from 'react-icons/lib/fa';
import { Padding } from 'styled-components-spacing';

import Paragraph from '../../atoms/Paragraph';
import PaperIcons from '../../atoms/PaperIcons';
import StyledColumn from './StyledColumn';
import Heading from '../../atoms/Heading';

class Contact extends Component {
  state = {
    value: '',
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <Row>
        <StyledColumn md={6}>
          <Heading upperCase>
            Contact us
          </Heading>


          <Row justifyContent={'center'}>
            <Column lg={7} md={9} sm={8}>
              <Row >
                <PaperIcons circle>
                  <FaEnvelope color={this.props.muiTheme.palette.accent1Color} />
                </PaperIcons>
                <Padding left={3}>
                  <Paragraph>info@mokahaiku.com</Paragraph>
                </Padding>
              </Row>
            </Column>
          </Row>

          <Row justifyContent={'center'}>
            <Column lg={7} md={9} sm={8}>
              <Row >
                <PaperIcons circle >
                  <FaTwitter color={this.props.muiTheme.palette.accent1Color} />
                </PaperIcons>
                <Padding left={3}>
                  <Paragraph>@mokahaiku</Paragraph>
                </Padding>
              </Row>
            </Column>
          </Row>

          <Row justifyContent={'center'}>
            <Column lg={7} md={9} sm={8}>
              <Row >
                <PaperIcons circle>
                  <FaGlobe color={this.props.muiTheme.palette.accent1Color} />
                </PaperIcons>
                <Padding left={3}>
                  <Paragraph>www.mokahaiku.com</Paragraph>
                </Padding>
              </Row>
            </Column>
          </Row>

        </StyledColumn>

        <Column md={6}>
          <Heading upperCase>
            Get a free consultation
          </Heading>
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

Contact.propTypes = {
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      accent1Color: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default muiThemeable()(Contact);
