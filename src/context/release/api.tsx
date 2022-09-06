import { AXIOS } from '@/api/axios';
import { Release } from '@/types/Data';
import { Dispatch } from 'react';
import { ReleaseAction } from '.';

export type IReleaseFormValues = Partial<Omit<Release, 'image'>> & {
  image: string;
  artist_ids: number[];
};

/**
 * api helpers for user
 */
export const onEditRelease =
  (dispatch: Dispatch<ReleaseAction>) =>
  async (
    values: IReleaseFormValues,
    onSuccess: (releaseSlug: Release['slug']) => void,
  ) => {
    dispatch({
      type: `start`,
      fetchType: `release`,
      isFetching: true,
    });

    console.log(`values`, values);

    try {
      const { data } = await AXIOS().instance.put<Release>(
        `releases/${values.id}`,
        {
          release: values,
        },
      );

      onSuccess(data.slug);

      console.log(`data`, data);

      dispatch({
        type: `successEditOrCreate`,
        fetchType: `release`,
        data,
      });
    } catch (error) {
      dispatch({
        type: `error`,
        fetchType: `release`,
        message: error.toString(),
      });

      console.log(`error`, error);
    }
  };
