import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'sixWeekWindow', label: '+/- 6 weeks' },
  { value: 'nextMonth', label: 'next month' },
  { value: 'next2Months', label: 'next 2 months' },
  { value: 'next3Months', label: 'next 3 months' },
  { value: 'all', label: 'all' },
];

export default class CustomSelect extends Component {
  state = {
    selectedOption: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: options[0],
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () => {
      console.log(`Option selected:`, this.state.selectedOption);
      this.props.onChange && this.props.onChange(this.state.selectedOption);
    });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="select-component">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          placeholder="Show releases from..."
          classNamePrefix="select-component"
          options={options}
        />
      </div>
    );
  }
}
