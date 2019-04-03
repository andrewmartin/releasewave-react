import React, { Component } from 'react';
import changeCase from 'change-case';

export default class FieldError extends Component {
  render() {
    const { errors, name, touched } = this.props;

    if (!errors[name] || !touched[name]) return null;

    const nameFormatted = changeCase.sentenceCase(errors[name]);

    return (
      errors[name] && touched[name] && <div className="form-feedback">{nameFormatted}.</div>
    );
  }
}
