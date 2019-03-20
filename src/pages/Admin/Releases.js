import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ConfirmButton from 'react-confirm-button';
import ActiveLink from 'components/ActiveLink';

import { withAdmin } from 'pages/layouts/withAdminDashboard';
import { TYPES } from 'store/reducers/modal';
import Table from 'components/Table/Table';
import { EditReleaseModal } from 'components/Modal';

class Releases extends Component {
  state = {
    editing: null,
    columns: [
      {
        Header: 'id',
        accessor: 'id',
        show: false,
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
        id: 'date',
        Header: 'Release Date',
        accessor: 'release_date',
      },
      {
        id: 'artists',
        Header: 'Artists',
        accessor: ({ artists }) => artists.map(artist => artist.name).join(','),
      },
      {
        Header: 'Actions',
        Cell: ({ original }) => {
          const {
            actions: { deleteRelease },
          } = this.props;
          return (
            <ul className="list-unstyled list-group list-group-horizontal">
              <li>
                <ActiveLink className="btn btn-sm btn-primary" href={`/releases/${original.slug}`}>
                  Show
                </ActiveLink>
              </li>
              <li>
                <Button color="info" size="sm" onClick={() => this.showEdit(original)}>
                  Edit
                </Button>
              </li>
              <li>
                <ConfirmButton
                  className="btn btn-sm btn-link"
                  onConfirm={() => deleteRelease(original.id)}
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
    ],
  };

  fetchData = () => {
    const {
      actions: { getAllReleases },
    } = this.props;
    getAllReleases();
  };

  componentDidMount() {
    this.fetchData();
  }

  showCreate = () => {
    const {
      actions: { showModal },
    } = this.props;

    showModal(TYPES.CREATE_RELEASE);
  };

  showEdit = release => {
    const {
      actions: { showModal },
    } = this.props;

    this.setState({
      editing: release,
    });

    showModal(TYPES.EDIT_RELEASE);
  };

  handleDelete = release => {
    const {
      actions: { showModal },
    } = this.props;

    this.setState({
      editing: release,
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
      release: { isLoading, items },
    } = this.props;

    const { editing, columns } = this.state;

    return (
      <div>
        <EditReleaseModal release={{ ...editing, isLoading }} actions={actions} />
        <header className="admin-header">
          <h3>Releases</h3>
          <Button color="primary" onClick={this.showCreate} size="sm">
            Create
          </Button>
        </header>
        <article>
          <Table columns={columns} items={items} />
        </article>
      </div>
    );
  }
}

export default withAdmin(Releases);
