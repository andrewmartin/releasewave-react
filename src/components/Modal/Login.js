import React, { Component } from 'react';
import { ModalFooter, ModalBody } from 'reactstrap';

import LoginForm from 'components/Forms/Login/Login';
import { TYPES } from 'store/reducers/modal';
import Modal from './';

export default class LoginModal extends Component {
  submit = async data => {
    const {
      actions: { hideModal, loginUser },
    } = this.props;

    const { payload } = await loginUser(data);
    if (!payload.error) {
      hideModal();
    }
  };
  render() {
    const {
      user,
      actions: { showModal },
    } = this.props;

    return (
      <Modal type={TYPES.LOGIN}>
        <ModalBody>
          <LoginForm isLoading={user.isLoading} onSubmit={this.submit} user={user} />
        </ModalBody>
        <ModalFooter>
          <p>
            Need an account?{' '}
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                showModal(TYPES.REGISTER);
              }}>
              Register here.
            </a>
          </p>
        </ModalFooter>
      </Modal>
    );
  }
}
