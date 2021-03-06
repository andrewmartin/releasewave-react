import React, { Component } from 'react';
import moment from 'moment';

export default class BuyLink extends Component {
  render() {
    const { href, date } = this.props;
    const futureDate = moment(date).isAfter(moment());

    if (!href) return null;

    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a href={href} target="_blank" className="btn btn-primary purchase-link">
        {futureDate ? 'Pre-Order' : 'Purchase'}
      </a>
    );
  }
}
