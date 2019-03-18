import React, { Component } from 'react';

export default class Errors extends Component {
  static defaultProps = {
    error: null,
  };

  render() {
    const { error } = this.props;
    let errors = [];

    if (!error) return null;

    if (error.full_messages) {
      errors = error.full_messages;
    } else if (error.length) {
      errors = error;
    } else {
      errors = ['There was an error.'];
    }

    return !!errors.length ? <div className="form-feedback">{errors.join(',')}</div> : null;
  }
}
