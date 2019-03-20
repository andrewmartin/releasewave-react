import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';
import HomePage from 'pages/Home';

class Home extends React.Component {
  static async getInitialProps(ctx, { actions }) {
    const { isServer } = ctx;

    try {
      await actions.getReleases();
    } catch (err) {
      console.log('err', err);
    }

    return {
      actions,
      isServer,
    };
  }

  render() {
    const { actions, release } = this.props;
    return <HomePage actions={actions} release={release} />;
  }
}

const mapStateToProps = ({ client, release }) => {
  return {
    release,
    client,
  };
};

const mapDispatchToProps = dispatch => bindAllActions(dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
