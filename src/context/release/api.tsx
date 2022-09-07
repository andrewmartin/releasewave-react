import { AXIOS } from '@/api/axios';
import { Release, Review } from '@/types/Data';
import { CONFIRM } from '@/util/constants';
import { Dispatch } from 'react';
import { ReleaseAction } from '.';

export type ReleaseFormValues = Partial<Omit<Release, 'image'>> & {
  image: string;
  artist_ids: number[];
};

export type CreateReviewFormValues = {
  id: string;
  name: string;
  content: string;
  score: string;
};

export type DeleteReviewFormValues = {
  id: Review['id'];
  releaseSlug: Release['slug'];
};

/**
 * api helpers for release
 */
export const onEditRelease =
  (dispatch: Dispatch<ReleaseAction>) =>
  async (
    values: ReleaseFormValues,
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
    } catch (error: any) {
      dispatch({
        type: `error`,
        fetchType: `release`,
        message: error.toString(),
      });

      console.log(`error`, error);
    }
  };

export const onCreateReview =
  (dispatch: Dispatch<ReleaseAction>) =>
  async (
    values: CreateReviewFormValues,
    slug: string,
    onSuccess: () => void,
  ) => {
    dispatch({
      type: `start`,
      fetchType: `review`,
      isFetching: true,
    });

    try {
      console.log(`values.score`, values.score);
      values.score = parseFloat(`${values.score}`).toFixed(2) as any;

      const { data } = await AXIOS().instance.post<Review>(
        `releases/${slug}/reviews`,
        {
          review: values,
        },
      );

      onSuccess();

      console.log(`data`, data);

      dispatch({
        type: `successCreateReview`,
        fetchType: `review`,
        data,
      });
    } catch (error: any) {
      dispatch({
        type: `error`,
        fetchType: `release`,
        message: error.toString(),
      });

      console.log(`error`, error);
    }
  };

export const onDeleteRelease =
  (dispatch: Dispatch<ReleaseAction>) =>
  async (values: DeleteReviewFormValues, onSuccess: () => void) => {
    const { releaseSlug: slug, id } = values;
    if (!CONFIRM(`NO_UNDO`)) return;
    dispatch({
      type: `start`,
      fetchType: `review`,
      isFetching: true,
    });

    console.log(`values`, values);

    try {
      const { data } = await AXIOS().instance.delete<Review>(
        `releases/${slug}/reviews/${id}`,
      );

      onSuccess();

      console.log(`data`, data);

      dispatch({
        type: `successDeleteReview`,
        fetchType: `review`,
        data,
      });
    } catch (error: any) {
      dispatch({
        type: `error`,
        fetchType: `release`,
        message: error.toString(),
      });

      console.log(`error`, error);
    }
  };
