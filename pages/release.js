import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';
import { CreateReviewModal, EditReviewModal } from 'components/Modal';
import ReleasePage from 'pages/Release';
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
