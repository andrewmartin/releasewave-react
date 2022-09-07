import { AXIOS } from '@/api/axios';
import { Artist, Review } from '@/types/Data';
import { Dispatch } from 'react';
import { ArtistAction } from '.';

export type ArtistFormValues = Partial<Omit<Artist, 'image'>> & object;

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
export const onEditArtist =
  (dispatch: Dispatch<ArtistAction>) =>
  async (
    values: ArtistFormValues,
    onSuccess: (artistSlug: Artist['slug']) => void,
  ) => {
    dispatch({
      type: `start`,
      fetchType: `artist`,
      isFetching: true,
    });

    console.log(`values`, values);

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
    } catch (error: any) {
      dispatch({
        type: `error`,
        fetchType: `artist`,
        message: error.toString(),
      });

      console.log(`error`, error);
    }
  };

export const onCreateArtist =
  (dispatch: Dispatch<ArtistAction>) =>
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

      console.log(`data`, data);
    } catch (error: any) {
      dispatch({
        type: `error`,
        fetchType: `artist`,
        message: error.toString(),
      });

      console.log(`error`, error);
    }
  };

// export const onDeleteArtist =
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
