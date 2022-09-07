import { AXIOS } from '@/api/axios';
import { Artist, RailsCollectionResponse } from '@/types/Data';
import { usePrevious } from 'react-use';

import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import Link from 'next/link';
import { FaWindowClose } from 'react-icons/fa';

type Option = {
  value: number;
  label: string;
};

const buildOptions = (artists: Artist[]): Option[] => {
  return artists.map((artist) => {
    return {
      value: artist.id,
      label: artist.name,
    } as Option;
  });
};

const loadOptions = async (inputValue: string) => {
  const { data } = await AXIOS().instance.get<RailsCollectionResponse<Artist>>(
    `artists`,
    {
      params: {
        search: inputValue,
      },
    },
  );

  return buildOptions(data.items);
};

interface SelectProps<O = Option> {
  onChange: (newValue: O | null) => void;
  initialValue: Option | null;
}

export const ArtistSelect = (props: SelectProps) => {
  return (
    <div className="text-sm not-italic">
      <AsyncSelect<Option>
        onChange={props.onChange}
        defaultValue={props.initialValue || ({} as Option)}
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
      />
    </div>
  );
};

type SocialOption = {
  value: string;
  label: string;
};

interface ArtistSocialSelectProps
  extends Omit<SelectProps<SocialOption>, 'initialValue'> {
  initialValue: SocialOption | null;
  socialName: string;
  artistName: string;
  onRemove: () => void;
}

type SearchResult = {
  link: string;
  title: string;
  displayLink: string;
};

// other items are here but we don't care
type SearchResultResponse = {
  kind: string;
  items: SearchResult[];
};

const buildSocialOptions = (
  searchResults: SearchResultResponse,
): SocialOption[] => {
  console.log(`searchResults`, searchResults);

  const items = searchResults.items.map((searchResult) => {
    return {
      value: searchResult.link,
      label: `${searchResult.title} - ${searchResult.displayLink}`,
    } as SocialOption;
  });

  return items;
};

const loadSocialOptions =
  (socialName: string, inputValue: string) => async () => {
    const searchValue = `${inputValue} ${socialName}`;

    const { data } = await AXIOS().instance.get<SearchResultResponse>(
      `artist-search/${searchValue}`,
    );
    return buildSocialOptions(data);
  };

export const ArtistSocialSelect = (props: ArtistSocialSelectProps) => {
  const { initialValue, socialName, artistName, onChange, onRemove } = props;
  const [currentArtistName, setCurrentArtistName] = useState(artistName);
  const [link, setLink] = useState(initialValue?.value);
  const previousArtistName = usePrevious(artistName);

  useEffect(() => {
    if (previousArtistName !== artistName) {
      setCurrentArtistName(artistName);
    }
  }, [artistName, previousArtistName]);

  return (
    <div className="text-sm not-italic">
      <div className="flex items-center">
        <div className="w-full">
          <AsyncSelect<SocialOption>
            key={currentArtistName}
            onChange={(value) => {
              onChange(value);
              setLink(value?.value as string);
            }}
            defaultValue={initialValue || ({} as SocialOption)}
            defaultOptions
            loadOptions={loadSocialOptions(socialName, currentArtistName)}
          />
        </div>
        <button
          onClick={() => {
            onRemove();
            setLink(undefined);
          }}
          className="flex items-center space-x-2 ml-2"
          type="button"
        >
          <FaWindowClose />
          <span>Clear</span>
        </button>
      </div>
      {link && (
        <pre className="mt-4 text-pink hover:text-black">
          <Link href={link}>
            <a rel="noreferrer" href={link} target="_blank">
              {link}
            </a>
          </Link>
        </pre>
      )}
    </div>
  );
};
