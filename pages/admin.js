import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'components/connect/index';
import { actions as artistActions } from 'store/reducers/artist';
import AdminRoutes from 'pages/Admin/Routes';

class Admin extends React.Component {
  render() {
    const { user, rehydrated } = this.props;
    if (!rehydrated) return null;

    return <AdminRoutes user={user} />;
  }
}

const mapStateToProps = ({ user, artist, client, _persist }) => {
  return {
    user,
    rehydrated: Boolean(_persist && _persist.rehydrated),
    client,
    artist,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...artistActions,
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
