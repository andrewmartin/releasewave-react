import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';
import ArtistsPage from 'pages/Artists/ArtistsPage';
import track from 'analytics';

class Home extends React.Component {
  static async getInitialProps(ctx, { actions }) {
    const { isServer } = ctx;

    const { getArtists } = actions;

    await getArtists();

    return {
      actions,
      isServer,
    };
  }

  componentDidMount = () => {
    track(window.location.pathname + window.location.search);
  };

  render() {
    const { actions, artist, user } = this.props;
    return <ArtistsPage actions={actions} artist={artist} user={user} />;
  }
}

const mapStateToProps = ({ user, client, artist }) => {
  return {
    user,
    artist,
    client,
  };
};

const mapDispatchToProps = dispatch => bindAllActions(dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
