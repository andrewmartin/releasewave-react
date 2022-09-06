import { AXIOS } from '@/api/axios';
import { Artist, RailsCollectionResponse } from '@/types/Data';
import React from 'react';
import AsyncSelect from 'react-select/async';

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

interface SelectProps {
  onChange: (newValue: Option | null) => void;
  initialValue: {
    value: number;
    label: string;
  } | null;
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
