import React, { Component } from 'react';
import cx from 'classnames';
import { Formik } from 'formik';
import { FileField } from 'components/Forms/components';
import Errors from 'components/Errors/Errors';

const fields = ['name'];

class UserForm extends Component {
  static defaultProps = {
    artist: {
      serverError: null,
    },
  };

  constructor(props) {
    super(props);
    let initialValues = {};

    if (props.user) {
      const { id, name, image } = props.user;

      initialValues = {
        id: id || '',
        name: name || '',
        image: image || '',
      };
    } else {
      fields.forEach(field => {
        initialValues[field] = '';
      });
    }

    this.state = { fields, initialValues, submitted: false };
  }

  renderForm = props => {
    const { isLoading } = this.props;

    const { values, errors, handleChange, handleSubmit, handleBlur, isValid, touched } = props;

    const classes = cx('webform', {
      webform__error: !isValid && this.state.submitted,
      'needs-validation': !isValid,
    });

    return (
      <form className={classes} onSubmit={handleSubmit}>
        {fields.map(field => (
          <div key={field} className="form-group">
            <label htmlFor={field}>{field}</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              onBlur={handleBlur}
              value={values[field]}
              name={field}
            />
            {errors[field] && touched[field] && (
              <div className="form-feedback">{errors[field]}</div>
            )}
          </div>
        ))}
        <FileField name="image" label="Image" {...props} />

        {values.image && (
          <div className="form-group">
            <img src={values.image.large} alt="" />
          </div>
        )}
        <button disabled={isLoading} className="btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  };

  onSubmit = async (data, actions) => {
    this.setState({
      submitted: true,
    });

    await this.props.onSubmit(data);
    actions.setSubmitting(false);
  };

  validate = values => {
    let errors = {};

    const { fields } = this.state;

    fields.map(field => {
      if (!values[field] && field === 'name') {
        errors[field] = `Please enter a ${field} value.`;
      }
    });

    return errors;
  };

  render() {
    const {
      artist: { serverError },
    } = this.props;
    const { initialValues } = this.state;

    return (
      <div className="webform-wrapper">
        <Formik
          validate={this.validate}
          fields={initialValues}
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          render={this.renderForm}
        />
        <Errors error={serverError} />
      </div>
    );
  }
}

export default UserForm;
