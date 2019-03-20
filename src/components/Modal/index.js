import React, { Component } from 'react';
import { Modal as ReactModal, ModalHeader } from 'reactstrap';
import { bindActionCreators } from 'redux';
import changeCase from 'change-case';
import { connect } from 'react-redux';
import { actions as modalActions } from 'store/reducers/modal';

class Modal extends Component {
  onClose = () => {
    const {
      actions: { hideModal },
    } = this.props;
    hideModal();
  };

  render() {
    const { modal, children, title, type } = this.props;
    const closeBtn = (
      <button className="close" onClick={this.onClose}>
        &times;
      </button>
    );

    return (
      <ReactModal toggle={this.onClose} centered isOpen={modal.activeModal === type}>
        <ModalHeader close={closeBtn}>{changeCase.titleCase(title || type)}</ModalHeader>
        {children}
      </ReactModal>
    );
  }
}

const mapStateToProps = ({ modal }) => ({
  modal,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...modalActions,
    },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export { default as RegisterModal } from './Register';
export { default as LoginModal } from './Login';
export { default as CreateArtistModal } from './CreateArtist';
export { default as EditArtistModal } from './EditArtist';
export { default as CreateReleaseModal } from './CreateRelease';
export { default as EditReleaseModal } from './EditRelease';
export { default as CreateReviewModal } from './CreateReview';
export { default as EditReviewModal } from './EditReview';
export { default as EditUserModal } from './EditUser';
