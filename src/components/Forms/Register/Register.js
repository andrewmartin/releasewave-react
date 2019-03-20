import React, { Component } from 'react';
import cx from 'classnames';
import { Formik } from 'formik';

import Errors from 'components/Errors/Errors';

class Register extends Component {
  renderForm = props => {
    const { isLoading } = this.props;

    const { values, errors, handleChange, handleSubmit, handleBlur, isValid, touched } = props;

    const classes = cx('webform', {
      webform__error: !isValid && touched.email && touched.password,
      'needs-validation': !isValid,
    });

    const Errors = () =>
      !!Object.keys(errors).length
        ? Object.keys(errors).map(key => (
            <div key={key} className="form-feedback">
              {errors[key]}
            </div>
          ))
        : null;

    return (
      <form className={classes} onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name="password"
          />
        </div>
        <Errors />
        <button disabled={isLoading} className="btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  };

  onSubmit = async (data, actions) => {
    await this.props.onSubmit(data);
    actions.setSubmitting(false);
  };

  validate = values => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Please enter a email';
    }

    if (!values.password) {
      errors.password = 'Please enter a password';
    }

    return errors;
  };

  render() {
    const {
      user: { serverError },
    } = this.props;

    return (
      <div className="webform-wrapper">
        <h2>Register</h2>
        <Formik
          validate={this.validate}
          initialValues={{ email: '', password: '' }}
          onSubmit={this.onSubmit}
          render={this.renderForm}
        />
        <Errors error={serverError} />
      </div>
    );
  }
}

export default Register;
