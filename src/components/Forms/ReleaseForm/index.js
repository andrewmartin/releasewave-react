import React, { Component } from 'react';
import cx from 'classnames';
import { Formik } from 'formik';
import {
  FileField,
  DateField,
  SelectField,
  TextField,
  EmbedField,
  RichTextField,
  CheckboxField,
} from 'components/Forms/components';
import Errors from 'components/Errors/Errors';

const fields = ['name', 'buy'];

class ReleaseForm extends Component {
  static defaultProps = {
    release: {
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
      release: { slug },
    } = this.props;

    if (slug !== prevProps.release.slug) {
      this.setInitialValues();
    }
  }

  setInitialValues() {
    const {
      id,
      name,
      image,
      embeds,
      description,
      artists,
      release_date,
      buy,
      short_description,
      featured,
    } = this.props.release;

    const initialValues = {
      id: id || '',
      name: name || '',
      image: image || '',
      description: description || '',
      artist_ids: artists ? artists.map(({ id, name }) => ({ value: id, label: name })) : [],
      release_date: release_date || '',
      embed_code: embeds ? embeds.map(embed => embed.content) : [],
      buy: buy || '',
      short_description: short_description || '',
      featured: Boolean(featured),
    };

    this.setState({
      initialValues,
    });
  }

  renderForm = props => {
    const { isLoading } = this.props;
    const { values, handleSubmit, isValid } = props;

    const classes = cx('webform', {
      webform__error: !isValid && this.state.submitted,
      'needs-validation': !isValid,
    });

    return (
      <form className={classes} onSubmit={handleSubmit}>
        {fields.map(name => (
          <TextField key={name} name={name} {...props} />
        ))}
        <div className="form-group">
          <RichTextField name="short_description" {...props} />
        </div>
        <div className="form-group">
          <RichTextField name="description" {...props} />
        </div>
        <div className="form-group">
          <DateField label="Release Date" name="release_date" {...props} />
        </div>
        <div className="form-group">
          <FileField name="image" label="Image" {...props} />
          {values.image && <img src={values.image.thumb} alt="" />}
        </div>
        <div className="form-group">
          <SelectField name="artist_ids" label="Artist(s)" {...props} />
        </div>
        <CheckboxField
          label="Check this box to feature this release"
          name="featured"
          {...props}
        />
        <EmbedField
          placeholder="Paste embed code here"
          name="embed_code"
          label="Embed"
          {...props}
        />
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

    if (data.artist_ids) {
      data.artist_ids = data.artist_ids.map(item => item.value);
    }

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
    const { release } = this.props;
    const serverError = release ? release.serverError : null;

    const { initialValues } = this.state;

    return (
      <div className="webform-wrapper">
        <Formik
          enableReinitialize
          validate={this.validate}
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          render={this.renderForm}
        />
        <Errors error={serverError} />
      </div>
    );
  }
}

export default ReleaseForm;
