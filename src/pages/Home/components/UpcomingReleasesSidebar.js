import React, { Component } from 'react';
import moment from 'moment';

import { formatDate } from 'components/helpers';
import { defaultState } from 'store/reducers/release';
import { sixWeekWindow } from 'helpers';
import ActiveLink from 'components/ActiveLink';

class UpcomingReleasesSidebarItems extends Component {
  state = {
    expanded: false,
    toShow: 10,
  };

  renderItem = (month, item) => {
    const { artists, name, image, release_date, slug } = item;
    const date = moment(release_date).format('MM');

    if (date !== month) return null;

    let artistNames = null;
    if (artists && artists.length) {
      artistNames = artists.map(artist => artist.name).join(',');
    }

    return (
      <li key={slug}>
        <ActiveLink href={`/releases/${slug}`}>
          <figure style={{ backgroundImage: `url(${image.thumb})` }} />
          <span>
            <h4>
              {artistNames && artistNames}
              <small>{name}</small>
            </h4>
            <cite>{formatDate(release_date)}</cite>
          </span>
        </ActiveLink>
      </li>
    );
  };

  expandItems = () => {
    this.setState(prevState => ({
      toShow: prevState.toShow + 5,
    }));
  };

  render() {
    const { items, month, monthName } = this.props;
    const { toShow } = this.state;
    const hasAll = toShow >= items.length;
    if (!items || !items.length) return null;

    return (
      <div className="upcoming-releases-sidebar-section">
        <h3>{monthName}</h3>
        <ul key={month}>{items.slice(0, toShow).map(item => this.renderItem(month, item))}</ul>
        <button className={'btn btn-link btn-sm'} hidden={hasAll} onClick={this.expandItems}>
          Show More
        </button>
      </div>
    );
  }
}

export default class UpcomingReleasesSidebar extends Component {
  static defaultProps = {
    itemsByMonth: defaultState.itemsByMonth,
  };

  render() {
    const { itemsByMonth } = this.props;

    const set = new Set();
    sixWeekWindow.forEach(({ key }) => set.add(key));
    const items = [];

    set.forEach(monthKey => {
      if (itemsByMonth[monthKey]) {
        const { name } = sixWeekWindow.find(item => item.key === monthKey);
        items.push(
          <UpcomingReleasesSidebarItems
            key={name}
            month={monthKey}
            monthName={name}
            items={itemsByMonth[monthKey]}
          />
        );
      }
    });

    return <aside className="upcoming-releases-sidebar">{items}</aside>;
  }
}
