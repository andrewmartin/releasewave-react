import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ConfirmButton from 'react-confirm-button';
import { withAdmin } from 'pages/layouts/withAdminDashboard';
import { TYPES } from 'store/reducers/modal';
import Table from 'components/Table/Table';
import { EditArtistModal } from 'components/Modal';

class Artists extends Component {
  columns = [
    {
      Header: 'id',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
      Cell: ({ original }) => {
        return (
          <a href="#" onClick={this.showEdit.bind(this, original)}>
            {original.name}
          </a>
        );
      },
    },
    {
      id: 'image',
      Header: 'image',
      accessor: ({ image }) => {
        return image.thumb;
      },
      Cell: ({ original }) => {
        return <img src={original.image.thumb} alt="" />;
      },
    },
    {
      Header: '',
      Cell: ({ original }) => {
        const {
          actions: { deleteArtist },
        } = this.props;
        return (
          <ul className="list-unstyled list-group list-group-horizontal">
            <li>
              <Button color="primary" size="sm" onClick={() => this.showEdit(original)}>
                Edit
              </Button>
            </li>
            <li>
              <ConfirmButton
                className="btn btn-sm btn-link"
                onConfirm={() => deleteArtist(original.id)}
                text="Delete"
                confirming={{
                  className: 'btn btn-sm btn-danger',
                  text: 'Are you sure?',
                }}
              />
            </li>
          </ul>
        );
      },
    },
  ];

  state = {
    editing: null,
  };

  fetchData = () => {
    const {
      actions: { getArtists },
    } = this.props;

    getArtists();
  };

  componentDidMount() {
    this.fetchData();
  }

  showCreate = () => {
    const {
      actions: { showModal },
    } = this.props;

    showModal(TYPES.CREATE_ARTIST);
  };

  showEdit = artist => {
    const {
      actions: { showModal },
    } = this.props;

    this.setState({
      editing: artist,
    });

    showModal(TYPES.EDIT_ARTIST);
  };

  handleDelete = artist => {
    const {
      actions: { showModal },
    } = this.props;

    this.setState({
      editing: artist,
    });

    showModal(TYPES.EDIT_ARTIST);
  };

  componentDidUpdate(prevProps) {
    const {
      router: {
        location: { pathname },
      },
      rehydrated,
    } = this.props;

    if (prevProps.rehydrated !== rehydrated && rehydrated) {
      this.fetchData();
    }

    if (pathname !== prevProps.router.location.pathname) {
      this.fetchData();
    }
  }

  render() {
    const {
      actions,
      artist,
      artist: { items },
    } = this.props;

    const { editing } = this.state;

    return (
      <div>
        <EditArtistModal artist={{ ...artist, ...editing }} actions={actions} />
        <header className="admin-header">
          <h3>Artists</h3>
          <Button color="primary" onClick={this.showCreate} size="sm">
            Create
          </Button>
        </header>
        <article>
          <Table columns={this.columns} items={items} />
        </article>
      </div>
    );
  }
}

export default withAdmin(Artists);
