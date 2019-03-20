import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';

import ArtistForm from 'components/Forms/ArtistForm';
import { TYPES } from 'store/reducers/modal';
import Modal from './';

export default class CreateArtistModal extends Component {
  submit = async data => {
    const {
      actions: { hideModal, createArtist },
    } = this.props;

    const { payload } = await createArtist(data);
    if (!payload.error) {
      hideModal();
    }
  };
  render() {
    const { artist } = this.props;

    return (
      <Modal type={TYPES.CREATE_ARTIST}>
        <ModalBody>
          <ArtistForm isLoading={artist.isLoading} onSubmit={this.submit} artist={artist} />
        </ModalBody>
      </Modal>
    );
  }
}
