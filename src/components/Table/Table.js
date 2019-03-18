import React, { Component } from 'react';
import ReactTable from 'react-table';

export default class Table extends Component {
  static defaultProps = {
    items: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      data: props.items,
    };
  }

  componentDidUpdate(prevProps) {
    const { items } = this.props;
    if (prevProps.items !== items) {
      this.setState({
        items,
      });
    }
  }

  buildColumns() {
    const { columns } = this.props;

    return columns;
  }

  render() {
    const { items } = this.state;

    if (!items) return null;

    return (
      <div className="table">
        <ReactTable className="-striped -highlight" columns={this.buildColumns()} data={items} {...this.props} />
      </div>
    );
  }
}
