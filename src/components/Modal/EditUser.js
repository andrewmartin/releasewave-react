import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';

import UserForm from 'components/Forms/UserForm';
import { TYPES } from 'store/reducers/modal';
import Modal from './';

export default class EditUserModal extends Component {
  submit = async data => {
    const {
      actions: { hideModal, editUser },
    } = this.props;

    const { payload } = await editUser(data);
    if (!payload.error) {
      hideModal();
    }
  };
  render() {
    const { user } = this.props;
    return (
      <Modal type={TYPES.EDIT_USER}>
        <ModalBody>
          <UserForm isLoading={user.isLoading} onSubmit={this.submit} user={user} />
        </ModalBody>
      </Modal>
    );
  }
}
