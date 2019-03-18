import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';

import ReleasePage from 'components/pages/Release';

class Release extends React.Component {
  static async getInitialProps(ctx, { actions }) {
    const {
      isServer,
      query: { name },
    } = ctx;

    try {
      await actions.getRelease({ name });
    } catch (err) {
      console.log('err', err);
    }

    return {
      actions,
      isServer,
    };
  }

  render() {
    const { release } = this.props;
    return <ReleasePage {...release} />;
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
)(Release);
