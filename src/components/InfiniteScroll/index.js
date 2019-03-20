import React, { Component, createRef } from 'react';

export default class InfiniteScroll extends Component {
  static defaultProps = {
    offset: 500,
  };

  constructor(props) {
    super(props);

    this.content = createRef();
  }

  componentDidUpdate(prevProps) {
    const { hasMore } = this.props;

    if (hasMore !== prevProps.hasMore && !hasMore) {
      document.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    const { onScroll, offset, isLoading, hasMore } = this.props;
    const { current } = this.content;

    const hasScrolled = current.scrollTop + current.clientHeight + offset >= current.scrollHeight;

    if (hasScrolled && !isLoading && hasMore) {
      onScroll();
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { hasMore, children, onScroll } = this.props;

    return (
      <div ref={this.content}>
        {children}
        {hasMore && (
          <footer className="infinite-scroll-footer">
            <div>
              <button onClick={() => onScroll()} className="btn btn-secondary">
                Load More
              </button>
            </div>
          </footer>
        )}
      </div>
    );
  }
}
