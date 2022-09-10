import { AXIOS } from '@/api/axios';
import { Artist, RailsCollectionResponse, Review } from '@/types/Data';
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
) => (values: Values, onSuccess: (slug: string) => void) => Promise<void>;

export const onCreateArtist: OnCreateArtist<ArtistAction, ArtistFormValues> =
  (dispatch, appDispatch) => async (values, onSuccess) => {
    dispatch({
      type: `start`,
      fetchType: `artist`,
      isFetching: true,
    });

    console.log(`values`, values);

    try {
      const { data: artist } = await AXIOS().instance.post<Artist>(`artists`, {
        artist: values,
      });

      onSuccess(artist.slug as string);
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

type onGetArtists<Action> = (
  dispatch: Dispatch<Action>,
  params: Record<string, any>,
) => (onSuccess: () => void) => Promise<void>;

export const getArtists: onGetArtists<ArtistAction> =
  (dispatch, params = {}) =>
  async (onSuccess) => {
    try {
      const { data } = await AXIOS().instance.get<
        RailsCollectionResponse<Artist>
      >(`releases`, {
        params,
      });
      dispatch({
        type: `successGetArtists`,
        fetchType: `artist`,
        data,
      });
      onSuccess();
    } catch (error: any) {}
  };
