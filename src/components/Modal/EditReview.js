import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';

import ReviewForm from 'components/Forms/ReviewForm';
import { TYPES } from 'store/reducers/modal';
import Modal from './';

export default class EditReviewModal extends Component {
  submit = async data => {
    const {
      release: { slug },
      actions: { hideModal, editReview },
    } = this.props;

    const { payload } = await editReview(slug, data);
    if (!payload.error) {
      hideModal();
    }
  };
  render() {
    const { review } = this.props;

    return (
      <Modal type={TYPES.EDIT_REVIEW}>
        <ModalBody>
          <ReviewForm onSubmit={this.submit} review={review} />
        </ModalBody>
      </Modal>
    );
  }
}
