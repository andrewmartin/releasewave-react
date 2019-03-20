import React from 'react';

class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div>
        <h2>Page not found.</h2>
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server!`
            : 'An error occurred on client.'}
        </p>
      </div>
    );
  }
}

export default ErrorPage;
