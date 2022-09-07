import { useArtistContext } from '@/context/artist';
import { useReleaseContext } from '@/context/release';
import React, { FC, useEffect, useState } from 'react';
import { ArtistItem } from '../Artist/item';
import { FaSearch } from 'react-icons/fa';
import { ReleaseItem } from '../Release/item';
import styles from './Search.module.css';
import { useRouter } from 'next/router';
import { usePrevious } from 'react-use';
import { SearchResults } from '@/util/next/getServerSideProps/search';
import { AXIOS } from '@/api/axios';
import { InlineLoadingContainer } from '../Loading';

interface SearchPage {
  searchQuery: string;
}

export const SearchPage: FC<SearchPage> = (props) => {
  const { searchQuery } = props;
  const [searchValue, setSearchValue] = useState(searchQuery);
  const {
    dispatch: dispatchRelease,
    state: { releases },
  } = useReleaseContext();
  const {
    dispatch: dispatchArtist,
    state: { artists },
  } = useArtistContext();
  const { push } = useRouter();
  const previousSearchValue = usePrevious(searchValue);

  useEffect(() => {
    async function getSearch() {
      const { data } = await AXIOS().instance.get<SearchResults>(
        `search/${searchValue}`,
      );
      dispatchRelease({
        type: `successGetReleases`,
        fetchType: `release`,
        data: data.releases,
      });
      dispatchArtist({
        type: `successGetArtists`,
        fetchType: `artist`,
        data: data.artists,
      });
    }

    if (previousSearchValue !== searchValue) {
      getSearch();
    }
  }, [
    dispatchArtist,
    dispatchRelease,
    previousSearchValue,
    searchQuery,
    searchValue,
  ]);

  return (
    <div className="p-16 w-full">
      <div className="mb-16">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            push(`/search/${searchValue}`);
          }}
          className="w-full flex"
        >
          <input
            placeholder="Search for Artists or Releases"
            className={styles.SearchInput}
            onChange={(event) => {
              const value = event.currentTarget.value;
              setSearchValue(value);
            }}
          />
          <button
            className="min-w-[100px] flex items-center justify-center btn-primary btn"
            type="submit"
          >
            <FaSearch size={30} />
          </button>
        </form>
        <InlineLoadingContainer />
      </div>
      <h2 className="text-3xl font-bold tracking-tighter">
        {`Search for "${searchValue}"`}
      </h2>
      <div>
        <h2 className="text-4xl font-bold tracking-tighter mb-16 border-b border-b-2 border-gray-200 inline-block">
          Releases
        </h2>
        {releases?.items.map((release) => {
          return <ReleaseItem showArtist release={release} key={release.id} />;
        })}
      </div>
      <div>
        <h2 className="text-4xl font-bold tracking-tighter mb-16 border-b border-b-2 border-gray-200 inline-block">
          Artists
        </h2>
        {artists?.items.map((artist) => {
          return <ArtistItem artist={artist} key={artist.id} />;
        })}
      </div>
    </div>
  );
};
