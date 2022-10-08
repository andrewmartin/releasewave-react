import { AXIOS } from '@/api/axios';
import { Artist, RailsCollectionResponse } from '@/types/Data';
import { usePrevious } from 'react-use';

import React, { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import Link from 'next/link';
import { FaWindowClose, FaExternalLinkAlt } from 'react-icons/fa';
import { Input } from '@/components/Atoms/InputField';

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
  options: SocialOption[];
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
  const items = searchResults.items.map<SocialOption>((searchResult) => {
    return {
      value: searchResult.link,
      label: `${searchResult.title} - ${searchResult.displayLink}`,
    };
  });

  return items;
};

// leaving this wonky format to match the expectations of react-async select if we ever go back to that.
const loadSocialOptions =
  (socialName: string, searchTerm: string) => async () => {
    const suffix =
      socialName === `website` ? ` official website` : `on ${socialName}`;
    const searchValue = encodeURIComponent(`"${searchTerm}" ${suffix}`);

    const { data } = await AXIOS().instance.get<SearchResultResponse>(
      `artist-search/${searchValue}`,
    );
    return buildSocialOptions(data);
  };

export const ArtistSocialSelect = (props: ArtistSocialSelectProps) => {
  const { initialValue, artistName, options, onChange, onRemove, socialName } =
    props;
  const [currentArtistName, setCurrentArtistName] = useState(artistName);
  const [isManual, setIsManual] = useState(false);
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
          {isManual ? (
            <Input
              defaultValue={link}
              value={link}
              onChange={(event) => {
                onChange({
                  label: `${artistName} on ${socialName}`,
                  value: event.currentTarget.value,
                });
                setLink(event.currentTarget.value as string);
              }}
              type="text"
            />
          ) : (
            <Select<SocialOption>
              key={currentArtistName}
              isSearchable={false}
              options={options}
              onChange={(value) => {
                onChange(value);
                setLink(value?.value as string);
              }}
              defaultValue={initialValue || ({} as SocialOption)}
            />
          )}
        </div>

        {!isManual && (
          <>
            <button
              onClick={() => {
                onRemove();
                setLink(undefined);
                setIsManual(true);
              }}
              className="flex items-center space-x-2 ml-2"
              type="button"
            >
              <FaWindowClose />
              <span>Clear</span>
            </button>
            <button
              onClick={() => {
                onRemove();
                setIsManual(true);
              }}
              className="btn-secondary btn-sm w-[175px] items-center space-x-2 ml-2"
              type="button"
            >
              Manual Link
            </button>
          </>
        )}
      </div>
      {link && (
        <pre className="mt-4 text-pink hover:text-black">
          <Link href={link}>
            <a
              className="flex items-center"
              rel="noreferrer"
              href={link}
              target="_blank"
            >
              <FaExternalLinkAlt className="mr-3" />
              {link}
            </a>
          </Link>
        </pre>
      )}
    </div>
  );
};

interface SocialSelectContainer {
  socialName: string;
  artistName: string;
  children(options?: SocialOption[]): JSX.Element;
  shouldFetch: boolean;
}

export const SocialSelectContainer: FC<SocialSelectContainer> = (props) => {
  const { children, socialName, artistName, shouldFetch } = props;
  const [options, setOptions] = useState<SocialOption[]>([]);
  const previousArtistName = usePrevious(artistName);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    async function fetchData() {
      try {
        const options = await loadSocialOptions(socialName, artistName)();
        setOptions(options);
      } catch (error) {
        setError(error ? (error as any).toString() : `There was an error`);
      }
    }

    if (previousArtistName !== artistName) {
      setOptions([]);
    }

    if (shouldFetch && !options.length) {
      fetchData();
    }
  }, [artistName, options.length, previousArtistName, shouldFetch, socialName]);

  return (
    <>
      {children(options)}
      {error && <div className="text-xs mb-4 text-pink-400">{error}</div>}
    </>
  );
};
