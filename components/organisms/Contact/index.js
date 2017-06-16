import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui';
import { FaEnvelope, FaTwitter, FaGlobe } from 'react-icons/lib/fa';

import Heading from '../../atoms/Heading';
import IconWithLabel from '../../molecules/IconWithLabel';
import Division from '../../atoms/Division';
import ColStyled from '../../atoms/ColStyled';

class Contact extends Component {
  state = {
    value: '',
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <Row center={'xs'}>
        <ColStyled xs={12} sm={6} color={this.props.muiTheme.palette.backgroundColor}>
          <Row center={'xs'}>
            <Col>
              <Division py={3}>
                <Division pb={1}>
                  <Heading upperCase>
                    Contact us
                  </Heading>
                </Division>
                <IconWithLabel
                  icon={<FaEnvelope color={this.props.muiTheme.palette.accent1Color} />}
                  label={'info@mokahaiku.com'}
                />
                <IconWithLabel
                  icon={<FaTwitter color={this.props.muiTheme.palette.accent1Color} />}
                  label={'@mokahaiku'}
                />
                <IconWithLabel
                  icon={<FaGlobe color={this.props.muiTheme.palette.accent1Color} />}
                  label={'www.mokahaiku.com'}
                />
              </Division>
            </Col>
          </Row>
        </ColStyled>

        <Col xs={10} sm={6}>
          <Division py={3}>
            <Division pb={1}>
              <Heading upperCase>
                Get a free consultation
              </Heading>
            </Division>
            <form>
              <Row center={'xs'}>
                <Col md={5} sm={5} xs={10}>
                  <Division px={1}>
                    <TextField floatingLabelText="Name" fullWidth />
                  </Division>
                </Col>
                <Col md={5} sm={5} xs={10}>
                  <Division px={1}>
                    <TextField floatingLabelText="Your email" fullWidth />
                  </Division>
                </Col>

                <Col xs={10}>
                  <Division px={1} textAlign={'left'}>
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
                  </Division>
                </Col>
              </Row>
              <Row center={'xs'}>
                <Col xs={10}>
                  <Division pl={1} pt={3} textAlign={'left'}>
                    <RaisedButton label={'Send'} secondary />
                  </Division>
                </Col>
              </Row>
            </form>
          </Division>
        </Col>
      </Row>
    );
  }
}

Contact.propTypes = {
  muiTheme: PropTypes.shape({
    palette: PropTypes.shape({
      accent1Color: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default muiThemeable()(Contact);
