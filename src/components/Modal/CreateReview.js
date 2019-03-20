import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';

import ReviewForm from 'components/Forms/ReviewForm';
import { TYPES } from 'store/reducers/modal';
import Modal from './';

export default class CreateReviewModal extends Component {
  submit = async data => {
    const {
      release: { slug },
      actions: { hideModal, createReview },
    } = this.props;

    const { payload } = await createReview(slug, data);
    if (!payload.error) {
      hideModal();
    }
  };
  render() {
    const { review } = this.props;

    return (
      <Modal type={TYPES.CREATE_REVIEW}>
        <ModalBody>
          <ReviewForm onSubmit={this.submit} review={review} />
        </ModalBody>
      </Modal>
    );
  }
}
