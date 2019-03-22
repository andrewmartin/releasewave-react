import React, { Component } from 'react';
import { ModalBody } from 'reactstrap';

import ArtistForm from 'components/Forms/ArtistForm';
import { TYPES } from 'store/reducers/modal';
import Modal from './';

export default class EditArtistModal extends Component {
  async componentDidUpdate(prevProps) {
    const {
      actions: { getArtist },
      artist: { slug },
    } = this.props;

    if (slug !== prevProps.artist.slug) {
      await getArtist({ slug });
    }
  }

  submit = async data => {
    const {
      actions: { hideModal, editArtist },
    } = this.props;

    const { payload } = await editArtist(data);
    if (!payload.error) {
      hideModal();
    }
  };
  render() {
    const { artist } = this.props;

    return (
      <Modal type={TYPES.EDIT_ARTIST}>
        <ModalBody>
          <ArtistForm isLoading={artist.isLoading} onSubmit={this.submit} artist={artist} />
        </ModalBody>
      </Modal>
    );
  }
}
