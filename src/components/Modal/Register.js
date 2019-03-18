import React, { Component } from 'react';
import { ModalFooter, ModalBody } from 'reactstrap';

import RegisterForm from 'components/Forms/Register/Register';
import { TYPES } from 'store/reducers/modal';
import Modal from './';

export default class RegisterModal extends Component {
  submit = async data => {
    const {
      actions: { hideModal, registerUser },
    } = this.props;

    const { payload } = await registerUser(data);

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
      <Modal type={TYPES.REGISTER}>
        <ModalBody>
          <RegisterForm onSubmit={this.submit} user={user} />
        </ModalBody>
        <ModalFooter>
          <p>
            Have an account?{' '}
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                showModal(TYPES.LOGIN);
              }}>
              Login here.
            </a>
          </p>
        </ModalFooter>
      </Modal>
    );
  }
}
