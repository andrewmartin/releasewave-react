import React, { Component } from 'react';
import cx from 'classnames';
import { Formik } from 'formik';
import { FileField } from 'components/Forms/components';
import Errors from 'components/Errors/Errors';

const fields = [
  'name',
  'bandcamp',
  'facebook',
  'spotify',
  'soundcloud',
  'website',
  'youtube',
  'itunes',
  'twitter',
];

class ArtistForm extends Component {
  static defaultProps = {
    artist: {
      serverError: null,
    },
  };

  constructor(props) {
    super(props);
    this.state = { fields, initialValues: {}, submitted: false };
  }

  componentWillMount = () => {
    this.setInitialValues();
  };

  componentDidUpdate(prevProps) {
    const {
      artist: { slug },
    } = this.props;

    if (slug !== prevProps.artist.slug) {
      this.setInitialValues();
    }
  }

  setInitialValues() {
    const {
      id,
      bandcamp,
      facebook,
      name,
      soundcloud,
      spotify,
      image,
      website,
      youtube,
      itunes,
      twitter,
    } = this.props.artist;

    const initialValues = {
      id: id || '',
      bandcamp: bandcamp || '',
      facebook: facebook || '',
      name: name || '',
      soundcloud: soundcloud || '',
      spotify: spotify || '',
      image: image || '',
      website: website || '',
      youtube: youtube || '',
      itunes: itunes || '',
      twitter: twitter || '',
    };

    this.setState({
      initialValues,
    });
  }

  renderForm = props => {
    const { isLoading } = this.props;

    const { values, errors, handleChange, handleSubmit, handleBlur, isValid, touched } = props;

    const classes = cx('webform webform--flex', {
      webform__error: !isValid && this.state.submitted,
      'needs-validation': !isValid,
    });

    return (
      <form className={classes} onSubmit={handleSubmit}>
        <div className="row">
          {fields.map(field => (
            <div key={field} className="form-group col-sm-6">
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
        </div>

        <div className="row">
          <div className="col-sm-12">
            <FileField name="image" label="Image" {...props} />
          </div>
        </div>

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
          enableReinitialize
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

export default ArtistForm;
