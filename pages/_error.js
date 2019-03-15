import React from 'react';
import { connect } from 'react-redux';
import { getPage } from 'store/selectors';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div>
        <h2>Page not found.</h2>
        {/* <ErrorMessage error={this.props.error} /> */}
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server!`
            : 'An error occurred on client.'}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.data.error,
    ...getPage(state),
  };
};

export default connect(mapStateToProps)(Error);
