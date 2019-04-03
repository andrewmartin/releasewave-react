import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { bindAllActions } from 'store/actions/helpers';
import ActiveLink from 'components/ActiveLink';
import { CreateArtistModal, CreateReleaseModal } from 'components/Modal';
import { withRouter } from 'components/connect/index';
import { WithAdminUser } from 'components/connect';

class AdminDashboard extends Component {
  componentDidUpdate = prevProps => {
    const { user, rehydrated } = this.props;

    if (rehydrated !== prevProps.rehydrated) {
      if (!user || !user.is_admin) {
        return Router.push('/');
      }
    }
  };

  render() {
    const { release, artist, actions, children, rehydrated } = this.props;

    if (!rehydrated) return null;

    return (
      <WithAdminUser>
        <div className="admin-dashboard">
          <CreateArtistModal artist={artist} actions={actions} />
          <CreateReleaseModal release={release} actions={actions} />
          <div>
            <aside>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <ActiveLink className="nav-link" href="/admin">
                    Dashboard
                  </ActiveLink>
                </li>
                <li className="nav-item">
                  <ActiveLink className="nav-link" href="/admin/artists">
                    Artists
                  </ActiveLink>
                </li>
                <li className="nav-item">
                  <ActiveLink className="nav-link" href="/admin/releases">
                    Releases
                  </ActiveLink>
                </li>
              </ul>
            </aside>
            {children && <main>{children(this.props)}</main>}
          </div>
        </div>
      </WithAdminUser>
    );
  }
}

const mapStateToProps = ({ user, artist, release, client, _persist }) => {
  return {
    user,
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
