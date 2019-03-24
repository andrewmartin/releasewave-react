import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';
import HomePage from 'pages/Home/HomePage';
import track from 'analytics';

class Home extends React.Component {
  static async getInitialProps(ctx, { actions }) {
    const { isServer } = ctx;

    const { getReleases, clearReleases } = actions;

    clearReleases();
    await getReleases();

    return {
      actions,
      isServer,
    };
  }

  componentDidMount = () => {
    track(window.location.pathname + window.location.search);
  };

  render() {
    const { actions, release, user } = this.props;
    return <HomePage actions={actions} release={release} user={user} />;
  }
}

const mapStateToProps = ({ user, client, release }) => {
  return {
    user,
    release,
    client,
  };
};

const mapDispatchToProps = dispatch => bindAllActions(dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
