import { useArtistContext } from '@/context/artist';

import { useReleaseContext } from '@/context/release';
import React, { FC, forwardRef, useEffect, useRef } from 'react';
import { ArtistItem } from '../Artist/item';
import { FaSearch } from 'react-icons/fa';
import { ReleaseItem } from '../Release/item';
import styles from './Search.module.css';
import { useRouter } from 'next/router';
import { usePrevious } from 'react-use';
import { SearchResults } from '@/util/next/getServerSideProps/search';
import { AXIOS } from '@/api/axios';
import { useAppContext } from '@/context/app';
import classNames from 'classnames';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Head } from '../Head';

interface SearchPage {
  searchQuery: string | null;
}

type SearchBar = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const SearchBar = forwardRef<HTMLInputElement, SearchBar>(
  function SearchBarWithRef(props, ref) {
    return (
      <input
        placeholder="Search for Artists or Releases"
        className={styles.SearchInput}
        {...props}
        ref={ref}
      />
    );
  },
);

export const SearchBarWrapper: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { replace } = useRouter();
  const {
    state: { searchActive, searchTerm },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    if (searchActive) {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: `smooth` });
    }
  }, [searchActive]);

  return (
    <form
      className={classNames(
        `w-full flex justify-center items-center transition-all overflow-hidden`,
        {
          [`max-h-0`]: !searchActive,
          [`max-h-[100px]`]: searchActive,
        },
      )}
      onSubmit={(event) => {
        event.preventDefault();
        replace(`/search/${searchTerm}`);
      }}
    >
      <SearchBar
        ref={inputRef}
        onChange={(event) => {
          dispatch({
            type: `search`,
            searchTerm: event.currentTarget.value,
          });
        }}
      />
      <button
        className="bg-pink transition-all text-xl font-bold tracking-tight border-pink p-2 md:py-4 md:px-8 text-white h-[92px] border-4"
        type="submit"
      >
        <FaSearch size={30} />
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch({
            type: `search:close`,
          });
        }}
      >
        <AiFillCloseCircle
          className="m-2 md:m-4"
          size={50}
          color="rgba(0,0,0,0.2)"
        />
      </button>
    </form>
  );
};

export const SearchPage: FC<SearchPage> = (props) => {
  const { searchQuery } = props;
  const {
    dispatch,
    state: { searchTerm },
  } = useAppContext();
  const {
    dispatch: dispatchRelease,
    state: { releases, fetching: fetchingReleases },
  } = useReleaseContext();
  const {
    dispatch: dispatchArtist,
    state: { artists, fetching: fetchingArtists },
  } = useArtistContext();
  const { push } = useRouter();
  const previousSearchValue = usePrevious(searchTerm);

  useEffect(() => {
    async function getSearch() {
      dispatchRelease({
        type: `start`,
        fetchType: `releases`,
        isFetching: true,
      });
      dispatchArtist({
        type: `start`,
        fetchType: `artist`,
        isFetching: true,
      });

      const { data } = await AXIOS().instance.get<SearchResults>(
        `search/${searchTerm}`,
      );
      dispatchRelease({
        type: `successGetReleases`,
        fetchType: `releases`,
        data: data.releases,
      });
      dispatchArtist({
        type: `successGetArtists`,
        fetchType: `artist`,
        data: data.artists,
      });
    }

    if (previousSearchValue !== searchTerm && searchTerm) {
      getSearch();
    }
  }, [
    dispatchArtist,
    dispatchRelease,
    previousSearchValue,
    searchQuery,
    searchTerm,
  ]);

  const isFetching =
    fetchingArtists.get(`artists`) || fetchingReleases.get(`releases`);

  const seo = {
    title: `Search for "${searchTerm}"`,
  };

  return (
    <div className="p-6 md:p-16 w-full">
      <Head title={seo.title} />
      <div className="mb-16 w-full">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            push(`/search/${searchTerm}`);
          }}
          className="w-full flex"
        >
          <SearchBar
            onChange={(event) => {
              const value = event.currentTarget.value;
              dispatch({
                type: `search`,
                searchTerm: value,
              });
            }}
            value={searchTerm}
          />
          <button
            className="md:min-w-[100px] flex items-center justify-center btn-primary btn"
            type="submit"
          >
            <FaSearch size={30} />
          </button>
        </form>
        {/* <InlineLoadingContainer /> */}
      </div>
      {searchTerm && (
        <h2 className="text-2xl md:!text-3xl font-bold tracking-tighter mb-12">
          {`Search for "${searchTerm}"`}
        </h2>
      )}
      <section className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter mb-16 border-b-2 border-gray-200 inline-block">
            Releases
          </h2>
          {releases?.items.map((release) => {
            return (
              <ReleaseItem
                classNames={{
                  container: styles.Item,
                  content: styles.ItemContent,
                  image: styles.Image,
                }}
                imageProps={{
                  width: 300,
                  height: 300,
                }}
                showArtist
                key={release.id}
                {...release}
              />
            );
          })}
          {!isFetching && previousSearchValue && !releases?.items.length && (
            <h3 className="text-xl">Nothing found for {searchTerm}.</h3>
          )}
          {!isFetching && !previousSearchValue && !artists?.items.length && (
            <h3 className="text-xl">
              Enter a keyword above to search for Releases.
            </h3>
          )}
        </div>
        <div>
          <h2 className="text-4xl font-bold tracking-tighter mb-16 border-b-2 border-gray-200 inline-block">
            Artists
          </h2>
          {artists?.items.map((artist) => {
            return (
              <ArtistItem
                showContentDefault={false}
                classNames={{
                  container: styles.Item,
                  content: styles.ItemContent,
                  image: styles.Image,
                }}
                imageProps={{
                  width: 300,
                  height: 300,
                }}
                {...artist}
                key={artist.id}
              />
            );
          })}
          {!isFetching && previousSearchValue && !artists?.items.length && (
            <h3 className="text-xl">Nothing found for {searchTerm}.</h3>
          )}
          {!isFetching && !previousSearchValue && !artists?.items.length && (
            <h3 className="text-xl">
              Enter a keyword above to search for Artists.
            </h3>
          )}
        </div>
      </section>
    </div>
  );
};
