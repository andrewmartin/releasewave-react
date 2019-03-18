import React from 'react';

export const columns = [
  {
    Header: 'id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
    Cell: ({ original }) => {
      return (
        <a href="#" onClick={this.showEditArtist.bind(this, original)}>
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
];
