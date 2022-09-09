import { AXIOS } from '@/api/axios';
import { RailsCollectionResponse, Release, Review } from '@/types/Data';
import { CONFIRM } from '@/util/constants';
import { GetServerSidePropsContext } from 'next';
import { Dispatch } from 'react';
import toast from 'react-hot-toast';
import { FetchType, ReleaseAction } from '.';
import { AppAction } from '../app';
import { actionHelperCatch, genericErrorAction } from '../helpers/api';

export type ReleaseFormValues = Partial<Omit<Release, 'image'>> & {
  image: string;
  artist_ids: number[];
  embed_code: string[];
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
type OnCreateRelease<Action, Values> = (
  dispatch: Dispatch<Action>,
  appDispatch: Dispatch<AppAction>,
) => (
  values: Values,
  onSuccess: (slug: Release['slug']) => void,
) => Promise<void>;

export const onCreateRelease: OnCreateRelease<
  ReleaseAction,
  ReleaseFormValues
> = (dispatch, appDispatch) => async (values, onSuccess) => {
  dispatch({
    type: `start`,
    fetchType: `release`,
    isFetching: true,
  });

  try {
    const { data } = await AXIOS().instance.post<Release>(`releases`, {
      release: values,
    });

    onSuccess(data.slug);

    dispatch({
      type: `successEditOrCreate`,
      fetchType: `release`,
      data,
    });

    toast(`release created!`);
  } catch (error: any) {
    actionHelperCatch(error, appDispatch, () => {
      dispatch(
        genericErrorAction<ReleaseAction, FetchType>(
          `review`,
          error.toString(),
        ),
      );
    });
  }
};

type OnEditRelease<Action, Values> = (
  dispatch: Dispatch<Action>,
  appDispatch: Dispatch<AppAction>,
) => (
  values: Values,
  onSuccess: (releaseSlug: Release['slug']) => void,
) => Promise<void>;

export const onEditRelease: OnEditRelease<ReleaseAction, ReleaseFormValues> =
  (dispatch, appDispatch) => async (values: ReleaseFormValues, onSuccess) => {
    dispatch({
      type: `start`,
      fetchType: `release`,
      isFetching: true,
    });

    try {
      const { data } = await AXIOS().instance.put<Release>(
        `releases/${values.id}`,
        {
          release: values,
        },
      );

      onSuccess(data.slug);

      dispatch({
        type: `successEditOrCreate`,
        fetchType: `release`,
        data,
      });

      toast(`release updated!`);
    } catch (error: any) {
      actionHelperCatch(error, appDispatch, () => {
        dispatch(
          genericErrorAction<ReleaseAction, FetchType>(
            `review`,
            error.toString(),
          ),
        );
      });
    }
  };

type OnCreateReview<Action, Values> = (
  dispatch: Dispatch<Action>,
  appDispatch: Dispatch<AppAction>,
) => (values: Values, slug: string, onSuccess: () => void) => Promise<void>;

export const onCreateReview: OnCreateReview<
  ReleaseAction,
  CreateReviewFormValues
> = (dispatch, appDispatch) => async (values, slug, onSuccess) => {
  dispatch({
    type: `start`,
    fetchType: `review`,
    isFetching: true,
  });

  try {
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

    toast(`review created!`);
  } catch (error: any) {
    actionHelperCatch(error, appDispatch, () => {
      dispatch(
        genericErrorAction<ReleaseAction, FetchType>(
          `review`,
          error.toString(),
        ),
      );
    });
  }
};

type OnDeleteRelease<Action, Values> = (
  dispatch: Dispatch<Action>,
  appDispatch: Dispatch<AppAction>,
) => (values: Values, onSuccess: () => void) => Promise<void>;

export const onDeleteRelease: OnDeleteRelease<
  ReleaseAction,
  DeleteReviewFormValues
> = (dispatch, appDispatch) => async (values, onSuccess) => {
  const { releaseSlug: slug, id } = values;
  if (!CONFIRM(`NO_UNDO`)) return;
  dispatch({
    type: `start`,
    fetchType: `review`,
    isFetching: true,
  });

  try {
    const { data } = await AXIOS().instance.delete<Review>(
      `releases/${slug}/reviews/${id}`,
    );

    onSuccess();

    dispatch({
      type: `successDeleteReview`,
      fetchType: `review`,
      data,
    });

    toast(`review deleted!`);
  } catch (error: any) {
    actionHelperCatch(error, appDispatch, () => {
      dispatch(
        genericErrorAction<ReleaseAction, FetchType>(
          `review`,
          error.toString(),
        ),
      );
    });
  }
};

type onGetReleases<Action> = (
  dispatch: Dispatch<Action>,
  params: Record<string, any>,
) => (onSuccess: () => void) => Promise<void>;

export const getReleases: onGetReleases<ReleaseAction> =
  (dispatch, params = {}) =>
  async (onSuccess) => {
    try {
      const { data } = await AXIOS().instance.get<
        RailsCollectionResponse<Release>
      >(`releases`, {
        params,
      });
      dispatch({
        type: `successGetReleases`,
        fetchType: `release`,
        data,
      });
      onSuccess();
    } catch (error) {}
  };
