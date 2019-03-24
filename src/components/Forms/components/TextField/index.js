import React, { Component } from 'react';
import changeCase from 'change-case';
import { FieldError } from '../';

export default class TextField extends Component {
  static defaultProps = {
    type: 'text',
  };

  render() {
    const { type, name, errors, touched, values, handleBlur, handleChange } = this.props;

    return (
      <div key={name} className="form-group">
        <label htmlFor={name}>{changeCase.titleCase(name)}</label>
        {type === 'textarea' ? (
          <textarea
            className="form-control"
            onChange={handleChange}
            name={name}
            rows="2"
            defaultValue={values[name]}
          />
        ) : (
          <input
            onChange={handleChange}
            className="form-control"
            type={type}
            onBlur={handleBlur}
            value={values[name]}
            name={name}
          />
        )}

        <FieldError errors={errors} name={name} touched={touched} />
      </div>
    );
  }
}
