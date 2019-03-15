import React, { Component } from 'react';
import cx from 'classnames';
import { Formik } from 'formik';
import FileField from 'components/Forms/components/FileField';

const fields = ['name', 'bandcamp', 'facebook', 'spotify', 'soundcloud'];

class ArtistForm extends Component {
  constructor(props) {
    super(props);

    let initialValues = {};
    fields.forEach(field => {
      initialValues[field] = '';
    });
    this.state = { fields, initialValues, submitted: false };
  }

  renderForm = props => {
    const { values, errors, handleChange, handleSubmit, handleBlur, isValid, touched } = props;

    const classes = cx('webform', {
      webform__error: !isValid && this.state.submitted,
      'needs-validation': !isValid,
    });

    console.log('errors', errors);

    const Errors = () => (errors['serverError'] ? <div className="form-feedback">{errors['serverError']}</div> : null);

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
            {errors[field] && touched[field] && <div className="form-feedback">{errors[field]}</div>}
          </div>
        ))}
        <FileField name="image" label="Image" {...props} />

        <Errors />
        <button className="btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  };

  onSubmit = async (data, actions) => {
    this.setState({
      submitted: true,
    });

    const { payload = null } = await this.props.onSubmit(data);

    if (payload.error) {
      let errors = 'There was an error.';
      if (payload.error.errors) {
        errors = payload.error.errors.full_messages
          ? payload.error.errors.full_messages.join(', ')
          : payload.error.errors
          ? payload.error.errors.join(',')
          : 'There was an error.';
      }
      actions.setFieldError('serverError', errors);
    }

    actions.setSubmitting(false);
  };

  validate = values => {
    let errors = {};

    const { fields } = this.state;

    fields.map(field => {
      console.log('values', values);
      if (!values[field]) {
        errors[field] = `Please enter a ${field} value.`;
      }
    });

    return errors;
  };

  render() {
    const { initialValues } = this.state;

    console.log('initialValues', initialValues);

    return (
      <div className="webform-wrapper">
        <h2>Create Artist</h2>
        <Formik
          validate={this.validate}
          fields={initialValues}
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          render={this.renderForm}
        />
      </div>
    );
  }
}

export default ArtistForm;
