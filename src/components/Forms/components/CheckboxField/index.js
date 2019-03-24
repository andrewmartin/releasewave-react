import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';

class DateField extends Component {
  constructor(props) {
    super(props);

    const { values, name } = props;

    this.state = {
      selected: values[name] ? values[name] : null,
    };
  }

  onChange = e => {
    const { name, setFieldValue } = this.props;
    setFieldValue(name, e.target.checked);
  };

  getOptions = async inputValue => {
    const { dispatch } = this.props;

    const {
      payload: { items },
    } = await dispatch(
      actions.getArtists({
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
    const { label, name, values } = this.props;

    return (
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            checked={Boolean(values[name])}
            onChange={this.onChange}
            defaultValue={Boolean(values[name])}
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            {label}
          </label>
        </div>
      </div>
    );
  }
}

export default DateField;
