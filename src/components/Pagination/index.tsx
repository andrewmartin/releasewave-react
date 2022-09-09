import { RailsCollectionResponse } from '@/types/Data';
import React, { PropsWithChildren } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

type Pagination = Omit<RailsCollectionResponse<any>, 'items'> & {
  onSelectPage: (pageNumber: number) => void;
};

export function Pagination(props: PropsWithChildren<Pagination>) {
  const { per_page, total_entries, current_page, onSelectPage } = props;
  const totalPages = Math.ceil(total_entries / per_page);

  const handlePageClick = (event: { selected: number }) => {
    const itemIndex = event.selected;
    // add 1, this is an index based value
    onSelectPage(itemIndex + 1);
  };

  return (
    <div className={styles.Pagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<button type="button">Next</button>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={totalPages}
        previousLabel={<button type="button">Previous</button>}
        forcePage={Math.ceil(current_page - 1)}
        activeClassName={styles.PaginationActive}
        disabledClassName={styles.PaginationDisabled}
      />
    </div>
  );
}
