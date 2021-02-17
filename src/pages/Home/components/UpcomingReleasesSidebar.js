import React, { Component } from 'react';

import { formatDate } from 'components/helpers';
import { defaultState } from 'store/reducers/release';
import ActiveLink from 'components/ActiveLink';

const Item = props => {
  const { item } = props;
  const { artists, name, image, release_date, slug } = item;

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

class UpcomingReleasesSidebarItems extends Component {
  state = {
    expanded: false,
    toShow: 15,
  };

  expandItems = () => {
    this.setState(prevState => ({
      toShow: prevState.toShow + 15,
    }));
  };

  render() {
    const { items, month } = this.props;
    const { toShow } = this.state;

    const hasAll = toShow >= items.length;
    if (!items || !items.length) return null;

    return (
      <div className="upcoming-releases-sidebar-section">
        <ul key={month}>
          {items.slice(0, toShow).map((item, k) => (
            <Item key={k} item={item} />
          ))}
        </ul>
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
    const { allItems } = this.props;

    return (
      <aside className="upcoming-releases-sidebar">
        <UpcomingReleasesSidebarItems items={allItems} />
      </aside>
    );
  }
}
