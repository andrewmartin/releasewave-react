import { AXIOS } from '@/api/axios';
import { Artist, Review } from '@/types/Data';
import { Dispatch } from 'react';
import toast from 'react-hot-toast';
import { ArtistAction, FetchType } from '.';
import { AppAction } from '../app';
import { actionHelperCatch, genericErrorAction } from '../helpers/api';

export type ArtistFormValues = Partial<Artist>;

export type CreateReviewFormValues = {
  id: string;
  name: string;
  content: string;
};

export type DeleteReviewFormValues = {
  id: Review['id'];
  artistSlug: Artist['slug'];
};

/**
 * api helpers for artist
 */
type OnEditArtist<Action, Values> = (
  dispatch: Dispatch<Action>,
  appDispatch: Dispatch<AppAction>,
) => (
  values: Values,
  onSuccess: (artistSlug: Artist['slug']) => void,
) => Promise<void>;

export const onEditArtist: OnEditArtist<ArtistAction, ArtistFormValues> =
  (dispatch, appDispatch) => async (values, onSuccess) => {
    dispatch({
      type: `start`,
      fetchType: `artist`,
      isFetching: true,
    });

    try {
      const { data } = await AXIOS().instance.put<Artist>(
        `artists/${values.id}`,
        {
          artist: values,
        },
      );

      onSuccess(data.slug);

      console.log(`data`, data);

      dispatch({
        type: `successEditOrCreate`,
        fetchType: `artist`,
        data,
      });

      toast(`artist updated!`);
    } catch (error: any) {
      actionHelperCatch(error, appDispatch, () => {
        dispatch(
          genericErrorAction<ArtistAction, FetchType>(
            `artist`,
            error.toString(),
          ),
        );
      });
    }
  };

type OnCreateArtist<Action, Values> = (
  dispatch: Dispatch<Action>,
  appDispatch: Dispatch<AppAction>,
) => (values: Values, slug: string, onSuccess: () => void) => Promise<void>;

export const onCreateArtist: OnCreateArtist<
  ArtistAction,
  CreateReviewFormValues
> =
  (dispatch, appDispatch) =>
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

    console.log(`values`, values);

    try {
      const { data } = await AXIOS().instance.post<Review>(
        `artists/${slug}/reviews`,
        {
          review: values,
        },
      );

      onSuccess();
      toast(`artist created!`);
    } catch (error: any) {
      actionHelperCatch(error, appDispatch, () => {
        dispatch(
          genericErrorAction<ArtistAction, FetchType>(
            `artist`,
            error.toString(),
          ),
        );
      });
    }
  };

// type OnDeleteArtist<Action, Values> = (
//   dispatch: Dispatch<Action>,
//   appDispatch: Dispatch<AppAction>,
// ) => (values: Values, onSuccess: () => void) => Promise<void>;
// export const onDeleteArtist: OnDeleteArtist<ArtistAction, DeleteReviewFormValues> =
//   (dispatch: Dispatch<ArtistAction>) =>
//   async (values: DeleteReviewFormValues, onSuccess: () => void) => {
//     const { artistSlug: slug, id } = values;
//     if (!CONFIRM(`NO_UNDO`)) return;
//     dispatch({
//       type: `start`,
//       fetchType: `review`,
//       isFetching: true,
//     });

//     console.log(`values`, values);

//     try {
//       const { data } = await AXIOS().instance.delete<Review>(
//         `artists/${slug}/reviews/${id}`,
//       );

//       onSuccess();

//       console.log(`data`, data);

//       dispatch({
//         type: `successDeleteReview`,
//         fetchType: `review`,
//         data,
//       });
//     } catch (error: any) {
//       dispatch({
//         type: `error`,
//         fetchType: `artist`,
//         message: error.toString(),
//       });

//       console.log(`error`, error);
//     }
//   };
