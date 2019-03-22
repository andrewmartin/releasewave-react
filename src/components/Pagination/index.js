import React, { Component } from 'react';
import { FullLoading } from 'components/Loading';
import cx from 'classnames';

export default class Pagination extends Component {
  state = {
    numberOfLinks: 0,
  };

  onNext = e => {
    const { onFetch, currentPage } = this.props;
    e.preventDefault();
    onFetch({ page: currentPage + 1 });
  };

  onPrev = e => {
    const { onFetch, currentPage } = this.props;
    e.preventDefault();
    onFetch({ page: currentPage - 1 === 0 ? 1 : currentPage - 1 });
  };

  onGoTo = (target, e) => {
    const { onFetch } = this.props;
    e.preventDefault();
    onFetch({ page: target });
  };

  componentDidUpdate = prevProps => {
    const { totalEntries, perPage } = this.props;

    if (totalEntries !== prevProps.totalEntries) {
      this.setState({
        numberOfLinks: (totalEntries % perPage) + 1,
      });
    }
  };

  generateLinks() {
    const { currentPage } = this.props;
    const { numberOfLinks } = this.state;

    const links = [];
    for (let page = 1; page < numberOfLinks + 1; page++) {
      links.push(
        <li className="page-item" key={page}>
          <a
            className={cx('page-link', {
              active: page === currentPage,
            })}
            onClick={this.onGoTo.bind(this, page)}
            href="#">
            {page}
          </a>
        </li>
      );
    }

    return links;
  }

  render() {
    const { isLoading, currentPage } = this.props;
    if (!currentPage) return null;

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a onClick={this.onPrev} className="page-link" href="#">
              Previous
            </a>
          </li>
          {this.generateLinks()}
          <li className="page-item">
            <a onClick={this.onNext} className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
        {isLoading && <FullLoading />}
      </nav>
    );
  }
}
