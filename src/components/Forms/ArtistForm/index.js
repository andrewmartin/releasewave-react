import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import cx from 'classnames';
import { Formik } from 'formik';
import { FileField } from 'components/Forms/components';
import Errors from 'components/Errors/Errors';
import { actions as artistActions } from 'store/reducers/artist';

const fields = [
  'bandcamp',
  'facebook',
  'spotify',
  'soundcloud',
  'website',
  'youtube',
  'itunes',
  'twitter',
  'instagram',
];

class ArtistForm extends Component {
  static defaultProps = {
    artist: {
      serverError: null,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      fields,
      initialValues: {},
      submitted: false,
      artistName: '',
    };
  }

  componentWillMount = () => {
    this.setInitialValues();
  };

  async componentDidUpdate(prevProps, prevState) {
    const {
      artist: { slug },
    } = this.props;
    const { artistName } = this.state;

    if (slug !== prevProps.artist.slug) {
      this.setInitialValues();
    }

    if (artistName !== prevState.artistName) {
      await this.searchLinkArtists();
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
      instagram,
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
      instagram: instagram || '',
    };

    this.setState({
      initialValues,
      artistName: initialValues.name,
    });
  }

  searchLinkArtists = async () => {
    const { dispatch } = this.props;
    const { artistName } = this.state;
    await dispatch(artistActions.searchLinkArtists(artistName));
  };

  buildOptions = () => {
    const {
      artist: { searchLinkItems },
    } = this.props;

    if (searchLinkItems && searchLinkItems.items) {
      const { items } = searchLinkItems;

      return items.map(item => {
        return {
          value: item.link,
          label: `${item.title} - ${item.displayLink}`,
        };
      });
    }

    return [];
  };

  renderForm = props => {
    const { isLoading } = this.props;

    const {
      values,
      errors,
      handleChange,
      handleSubmit,
      handleBlur,
      isValid,
      touched,
      setFieldValue,
    } = props;

    const classes = cx('webform webform--flex', {
      webform__error: !isValid && this.state.submitted,
      'needs-validation': !isValid,
    });

    return (
      <form className={classes} onSubmit={handleSubmit}>
        <div className="row">
          <div key={'name'} className="form-group col-sm-6">
            <label htmlFor={'name'}>{'name'}</label>
            <input
              onBlur={e => {
                this.setState({
                  artistName: e.target.value,
                });
                handleBlur(e);
              }}
              className="form-control"
              type="text"
              value={values['name']}
              onChange={handleChange}
              name={'name'}
            />
            {errors['name'] && touched['name'] && (
              <div className="form-feedback">{errors['name']}</div>
            )}
          </div>
        </div>
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
              <div className="form-group my-2">
                <Select
                  onChange={({ label, value }) => {
                    console.log('using label', label);
                    console.log('using value', value);
                    setFieldValue(field, value);
                  }}
                  options={this.buildOptions()}
                />
              </div>
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

const mapStateToProps = ({ artist }) => {
  return {
    artist,
  };
};

export default connect(mapStateToProps)(ArtistForm);
