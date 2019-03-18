import React, { Component } from 'react';
import changeCase from 'change-case';
import { FieldError } from '../';

export default class TextField extends Component {
  render() {
    const { name, errors, touched, values, handleBlur, handleChange } = this.props;

    return (
      <div key={name} className="form-group">
        <label htmlFor={name}>{changeCase.titleCase(name)}</label>
        <input
          onChange={handleChange}
          className="form-control"
          type="text"
          onBlur={handleBlur}
          value={values[name]}
          name={name}
        />
        <FieldError errors={errors} name={name} touched={touched} />
      </div>
    );
  }
}
