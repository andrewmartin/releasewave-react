import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';
import { CreateReviewModal, EditReviewModal } from 'components/Modal';
import ReleasePage from 'pages/Release/ReleasePage';
import track from 'analytics';

class Release extends React.Component {
  static async getInitialProps(ctx, { actions }) {
    const {
      isServer,
      query: { name },
    } = ctx;

    await actions.getRelease({ slug: name });
    await actions.getReviews(name);

    return {
      name,
      actions,
      isServer,
    };
  }

  componentDidMount = () => {
    track(window.location.pathname + window.location.search);
  };

  render() {
    const {
      user,
      modal: { modalData },
      release,
      review,
      actions,
    } = this.props;

    return (
      <>
        <CreateReviewModal actions={actions} release={release} />
        <EditReviewModal actions={actions} release={release} review={modalData} />
        <ReleasePage user={user} actions={actions} review={review} {...release} />
      </>
    );
  }
}

const mapStateToProps = ({ user, modal, client, release, review }) => {
  return {
    user,
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
