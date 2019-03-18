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

  onChange = value => {
    const { name, setFieldValue } = this.props;
    setFieldValue(name, value);
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

    var today = new Date();

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <InfiniteCalendar onSelect={this.onChange} width={400} height={300} selected={values[name] || today} />
      </div>
    );
  }
}

export default DateField;
