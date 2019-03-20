import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';

import { CreateReviewModal, EditReviewModal } from 'components/Modal';
import ReleasePage from 'pages/Release';

class Release extends React.Component {
  static async getInitialProps(ctx, { actions }) {
    const {
      isServer,
      query: { name },
    } = ctx;

    try {
      await actions.getRelease({ name });
      await actions.getReviews(name);
    } catch (err) {
      console.log('err', err);
    }

    return {
      actions,
      isServer,
    };
  }

  render() {
    const {
      modal: { modalData },
      release,
      review,
      actions,
    } = this.props;
    return (
      <>
        <CreateReviewModal actions={actions} release={release} />
        <EditReviewModal actions={actions} release={release} review={modalData} />
        <ReleasePage actions={actions} {...release} review={review} />
      </>
    );
  }
}

const mapStateToProps = ({ modal, client, release, review }) => {
  return {
    modal,
    review,
    release,
    client,
  };
};

const mapDispatchToProps = dispatch => bindAllActions(dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Release);
