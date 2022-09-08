import React, { FC, useEffect } from 'react';
import styles from './Release.module.css';
import Image from 'next/image';
import {
  FirstArtistForRelease,
  getFirstArtist,
} from '../Atoms/FirstArtistForRelease';
import { useReleaseContext } from '@/context/release';
import { useFormik } from 'formik';
import { FaArrowAltCircleRight as FaLink } from 'react-icons/fa';
import {
  MaybeEmbedField,
  FormFooter,
  MaybeField,
  MaybeForm,
  useFormContext,
} from '@/context/app/form';
import {
  ReleaseFormValues,
  onEditRelease,
  onCreateRelease,
} from '@/context/release/api';
import { useRouter } from 'next/router';
import { RichTextField } from '../Forms/Fields/RichTextField';
import { FileField } from '../Forms/Fields/FileField';
import { appendHostToImage } from '@/util/image';
import { ArtistSelect } from '../Forms/Fields/Select';
import { SocialLinks } from '../SocialLinks';
import Link from 'next/link';
import classNames from 'classnames';
import { Reviews } from './Reviews';
import { DEFAULT_RICH_TEXT_EDITOR_COPY, VALIDATIONS } from '@/util/constants';
import { Input } from '../Atoms/InputField';
import { CreateReviewFormContainer } from '../Forms/Review/create';
import { WithCurrentUser } from '@/hooks/user';
import { EmbedField, Embeds } from '../Embeds';
import ReactInfiniteCalendar, {
  ReactInfiniteCalendarProps,
} from 'react-infinite-calendar';
import { formatDate, getToday, isFutureDate } from '@/util/date';
import { ServerSideWithAdminArgs } from '@/types/App';
import { BlankRelease } from '@/util/mock';
import { useAppContext } from '@/context/app';
const Calendar =
  ReactInfiniteCalendar as unknown as FC<ReactInfiniteCalendarProps>;

export const ReleasePage = ({ isNew }: Partial<ServerSideWithAdminArgs>) => {
  const {
    dispatch,
    state: { release },
  } = useReleaseContext();
  const { dispatch: appDispatch } = useAppContext();
  const { isEditing, setIsEditing } = useFormContext();
  const { push } = useRouter();
  const artist = release ? getFirstArtist(release) : undefined;
  const formik = useFormik<ReleaseFormValues>({
    initialValues: {
      id: release?.id,
      name: release?.name || ``,
      description: release?.description || ``,
      image: ``,
      artist_ids: artist ? [artist.id] : [],
      embed_code: release?.embeds.map(({ content }) => content || ``) || [],
      release_date: release?.release_date,
      buy: release?.buy,
    },
    onSubmit: async (values) => {
      const action = isNew ? onCreateRelease : onEditRelease;

      await action(dispatch, appDispatch)(values, (slug) => {
        setIsEditing(false);
        if (slug) {
          push(`/releases/${slug}`);
        }
      });
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      console.log(`values`, values);

      if (!values.name) {
        errors.name = VALIDATIONS.REQUIRED(`name`);
      }

      if (values.name === BlankRelease.name) {
        errors.name = VALIDATIONS.CHANGE_FROM_DEFAULT(
          `name`,
          values?.name as string,
        );
      }

      if (!values.artist_ids.length) {
        errors.artist_ids = VALIDATIONS.CANNOT_EMPTY(`artists`);
      }

      if (
        !values.description ||
        values.description === DEFAULT_RICH_TEXT_EDITOR_COPY
      ) {
        errors.description = VALIDATIONS.REQUIRED(`Release Description`);
      }

      console.log(`errors`, errors);

      return errors;
    },
  });

  // domparser hack, may try to find an alternative later
  useEffect(() => {
    if (isNew) {
      setTimeout(() => {
        setIsEditing(true);
      });
    }
  }, [isNew, setIsEditing]);

  if (!release) {
    return null;
  }

  const { description, name, image, embeds, release_date, buy } = release;

  const today = getToday();
  const futureDate = isFutureDate(today);
  const purchaseText = futureDate ? `Pre-Order` : `Purchase`;

  return <></>;
};
