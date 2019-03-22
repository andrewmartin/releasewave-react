import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';
import HomePage from 'pages/Home';
import track from 'analytics';

class Home extends React.Component {
  static async getInitialProps(ctx, { actions }) {
    const { isServer } = ctx;

    const { getReleases, clearReleases } = actions;

    try {
      clearReleases();
      await getReleases();
    } catch (err) {
      console.log('err', err);
    }

    return {
      actions,
      isServer,
    };
  }

  componentDidMount = () => {
    track(window.location.pathname + window.location.search);
  };

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
