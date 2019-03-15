import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ArtistForm from 'components/Forms/ArtistForm';
import { withRouter } from 'components/connect/index';
import { actions } from 'store/reducers/artist';

class Admin extends React.Component {
  componentDidUpdate(prevProps) {
    const {
      router: {
        location: { pathname },
      },
      rehydrated,
      actions: { getArtists },
    } = this.props;
    console.log('this.props', this.props);

    if (prevProps.rehydrated !== rehydrated && rehydrated) {
      getArtists();
    }

    if (pathname !== prevProps.router.location.pathname) {
      getArtists();
    }
  }

  render() {
    const {
      rehydrated,
      actions: { createArtist },
    } = this.props;

    if (!rehydrated) return null;

    return (
      <div>
        <h2>Admin</h2>
        <ArtistForm onSubmit={createArtist} />
      </div>
    );
  }
}

const mapStateToProps = ({ client, _persist }) => {
  return {
    rehydrated: Boolean(_persist && _persist.rehydrated),
    client,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...actions,
    },
    dispatch
  ),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Admin)
);
