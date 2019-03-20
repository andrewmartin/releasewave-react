import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';

import ReleaseForm from 'components/Forms/ReleaseForm';
import { TYPES } from 'store/reducers/modal';
import Modal from './';

export default class CreateReleaseModal extends Component {
  submit = async data => {
    const {
      actions: { hideModal, createRelease },
    } = this.props;

    const { payload } = await createRelease(data);
    if (!payload.error) {
      hideModal();
    }
  };
  render() {
    const { release } = this.props;

    return (
      <Modal type={TYPES.CREATE_RELEASE}>
        <ModalBody>
          <ReleaseForm isLoading={release.isLoading} onSubmit={this.submit} release={release} />
        </ModalBody>
      </Modal>
    );
  }
}
