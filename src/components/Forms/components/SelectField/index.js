import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { connect } from 'react-redux';
import { actions as artistActions } from 'store/reducers/artist';

class SelectField extends Component {
  constructor(props) {
    super(props);

    const { values, name } = props;

    this.state = {
      defaultValue: values[name],
    };
  }

  onChange = value => {
    const { name, setFieldValue } = this.props;
    setFieldValue(name, value);
  };

  getOptions = async inputValue => {
    const { dispatch } = this.props;

    const {
      payload: { items },
    } = await dispatch(
      artistActions.getArtists({
        search: inputValue,
      })
    );

    const options = items.map(item => ({
      value: item.id,
      label: item.name,
    }));

    return options;
  };

  render() {
    const { label, name } = this.props;
    const { defaultValue } = this.state;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <AsyncSelect
          onChange={this.onChange}
          defaultOptions
          cacheOptions
          isMulti
          defaultValue={defaultValue}
          loadOptions={this.getOptions}
        />
      </div>
    );
  }
}

export default connect()(SelectField);
