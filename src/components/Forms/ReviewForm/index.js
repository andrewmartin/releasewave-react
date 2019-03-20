import React, { Component } from 'react';
import cx from 'classnames';
import { Formik } from 'formik';
import { RichTextField } from 'components/Forms/components';
import Errors from 'components/Errors/Errors';

const fields = ['name'];

class ReviewForm extends Component {
  static defaultProps = {
    review: {
      serverError: null,
    },
  };

  constructor(props) {
    super(props);
    let initialValues = {};

    if (props.review) {
      const { id, name, content } = props.review;

      initialValues = {
        id: id || '',
        name: name || '',
        content: content || '',
      };
    } else {
      initialValues = {
        content: '',
      };

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
            {errors[field] && touched[field] && <div className="form-feedback">{errors[field]}</div>}
          </div>
        ))}

        <RichTextField name="content" {...props} />

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
      if (!values[field] && field === 'title') {
        errors[field] = `Please enter a ${field} value.`;
      }
    });

    if (values.content.length <= 8) {
      errors.content = 'Please enter some content.';
    }

    return errors;
  };

  render() {
    const { review } = this.props;
    const serverError = review ? review.serverError : null;

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

export default ReviewForm;
