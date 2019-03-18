import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindAllActions } from 'store/actions/helpers';
import ActiveLink from 'components/ActiveLink';
import { CreateArtistModal, CreateReleaseModal } from 'components/Modal';
import { withRouter } from 'components/connect/index';

class AdminDashboard extends Component {
  render() {
    const { release, artist, actions, children } = this.props;
    return (
      <div className="admin-dashboard">
        <CreateArtistModal artist={artist} actions={actions} />
        <CreateReleaseModal release={release} actions={actions} />
        <div>
          <aside>
            <ul>
              <li>
                <ActiveLink href="/admin">Dashboard</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/admin/artists">Artists</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/admin/releases">Releases</ActiveLink>
              </li>
            </ul>
          </aside>
          {children && <main>{children(this.props)}</main>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ artist, release, client, _persist }) => {
  return {
    rehydrated: Boolean(_persist && _persist.rehydrated),
    client,
    artist,
    release,
  };
};

const mapDispatchToProps = dispatch => bindAllActions(dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminDashboard)
);
