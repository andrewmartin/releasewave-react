import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';

import ReleaseForm from 'components/Forms/ReleaseForm';
import { TYPES } from 'store/reducers/modal';
import Modal from './';

export default class EditReleaseModal extends Component {
  async componentDidUpdate(prevProps) {
    const {
      actions: { getRelease },
      release: { slug },
    } = this.props;

    if (slug !== prevProps.release.slug) {
      await getRelease({ slug });
    }
  }

  submit = async data => {
    const {
      actions: { hideModal, editRelease },
    } = this.props;

    const { payload } = await editRelease(data);
    if (!payload.error) {
      hideModal();
    }
  };

  render() {
    const { release } = this.props;
    return (
      <Modal type={TYPES.EDIT_RELEASE}>
        <ModalBody>
          <ReleaseForm
            isLoading={release.isLoading}
            onSubmit={this.submit}
            release={release}
          />
        </ModalBody>
      </Modal>
    );
  }
}
