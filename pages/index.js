import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';
import HomePage from 'pages/Home/HomePage';
import track from 'analytics';
import moment from 'moment';

class Home extends React.Component {
  static async getInitialProps(ctx, { actions }) {
    const { isServer } = ctx;

    const { getReleases, clearReleases, getFilteredReleases } = actions;

    const currentDate = () => moment().clone();

    /**
     * hardcoding dates?
     */
    const start_date = moment(currentDate())
      .subtract(4, 'weeks')
      .format('YYYY-MM-DD');
    const end_date = moment(currentDate())
      .add(90, 'days')
      .format('YYYY-MM-DD');

    clearReleases();
    await getReleases({
      start_date,
      end_date,
      page: 1,
    });
    console.log(`getting releases for start_date:`, start_date);
    console.log(`getting releases for end_date`, end_date);

    await getFilteredReleases({
      start_date,
      end_date,
    });

    return {
      actions,
      isServer,
    };
  }

  componentDidMount() {
    track(window.location.pathname + window.location.search);
  }

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
