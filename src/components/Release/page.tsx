import React, { FC, useEffect } from 'react';
import styles from './Release.module.css';
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
import { ArtistSelect } from '../Forms/Fields/Select';
import { SocialLinks } from '../SocialLinks';
import Link from 'next/link';
import { Reviews } from './Reviews';
import { DEFAULT_RICH_TEXT_EDITOR_COPY, VALIDATIONS } from '@/util/constants';
import { Checkbox, Input } from '../Atoms/InputField';
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
import { PictureImage } from '../Image';
import { ReleaseContent, ReleaseFeaturedBanner } from '../Atoms/ReleaseMeta';
import { Head, SeoProps } from '../Head';
import { PLAYLIST_URL } from '../Playlist';
import moment from 'moment';
import { CreateSocialFormContainer } from '../Forms/SocialPost/create';
import ImagesExample from '../Forms/Fields/RichTextField/images';

const Calendar =
  ReactInfiniteCalendar as unknown as FC<ReactInfiniteCalendarProps>;

export const ReleasePage = ({ isNew }: Partial<ServerSideWithAdminArgs>) => {
  const {
    dispatch,
    state: { release },
  } = useReleaseContext();
  const { dispatch: appDispatch } = useAppContext();
  const { setIsEditing } = useFormContext();
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
      featured: release?.featured,
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
  const futureDate = isFutureDate(moment(release_date));
  const purchaseText = futureDate ? `Pre-Order` : `Purchase`;
  const title =
    artist && artist.name ? `${name} by ${artist.name}` : name || ``;

  const seo: SeoProps = {
    title,
    description: `Read about ${title} on Release Wave.`,
    ogImageWidth: `500`,
    ogImageHeight: `500`,
    ogImage: image.square,
  };

  return (
    <>
      <Head {...seo} />
      <MaybeForm
        Footer={<FormFooter isFixed actionName="Edit" />}
        handleSubmit={formik.handleSubmit}
      >
        <div className={styles.ReleasePage}>
          <header className={styles.ReleasePageHeader}>
            <div className={styles.ReleasePageTitle}>
              <MaybeField<ReleaseFormValues>
                formik={formik}
                name="name"
                value={name}
                element={<h2>{name}</h2>}
              >
                <Input
                  name={`name`}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values[`name`] || ``}
                />
              </MaybeField>

              <span>
                <MaybeField<ReleaseFormValues>
                  formik={formik}
                  name="artist_ids"
                  customLabel="Artists"
                  value={name}
                  element={<FirstArtistForRelease {...release} />}
                >
                  <>
                    <ArtistSelect
                      onChange={(option) => {
                        const { value } = option!;
                        formik.setFieldValue(`artist_ids`, [value]);
                      }}
                      initialValue={
                        artist
                          ? {
                              value: artist.id,
                              label: artist.name as string,
                            }
                          : null
                      }
                    />
                    <Link
                      href="/admin/artists/new"
                      target="_blank"
                      className="mt-2 text-pink hover:underline hover:text-pink-500 transition-all flex items-center space-x-2 text-sm"
                    >
                      <FaLink></FaLink>
                      <em>Create an Artist</em>
                    </Link>
                  </>
                </MaybeField>
                <MaybeField<ReleaseFormValues>
                  formik={formik}
                  name="social"
                  value={name}
                  element={artist ? <SocialLinks {...artist} /> : null}
                >
                  <>
                    {artist ? <SocialLinks {...artist} /> : null}
                    <Link
                      href={`/artists/${artist?.slug}`}
                      target="_blank"
                      className="mt-2 text-pink hover:underline hover:text-pink-500 transition-all flex items-center space-x-2 text-sm"
                    >
                      <FaLink></FaLink>
                      <em className="text-sm">
                        Edit Socials on the Artist Page
                      </em>
                    </Link>
                  </>
                </MaybeField>
              </span>
            </div>
            <div className={styles.ReleasePageArt}>
              <MaybeField<ReleaseFormValues>
                formik={formik}
                name="featured"
                value={name}
                element={<ReleaseFeaturedBanner {...release} />}
              >
                <Checkbox
                  onChange={() => {
                    formik.setFieldValue(`featured`, !formik.values.featured);
                  }}
                  checked={Boolean(formik.values.featured)}
                />
                {formik.values.featured && (
                  <cite className="w-full block  mt-5">
                    Looks like you have featured this release. You should add a
                    song or two to the{` `}
                    <a className="text-pink underline" href={PLAYLIST_URL}>
                      The Wave
                    </a>
                    {` `}
                    Spotify playlist. Be sure to add it to the beginning! The
                    default playlist order will add it at the bottom.
                  </cite>
                )}
              </MaybeField>
              <MaybeField<ReleaseFormValues>
                formik={formik}
                name="image"
                value={name}
                element={<PictureImage src={image.large} alt={name} />}
              >
                <FileField
                  width={400}
                  height={400}
                  src={image.large}
                  name="image"
                  onChange={(name, values) => {
                    formik.setFieldValue(name, {
                      ...values,
                    });
                  }}
                />
              </MaybeField>
              <div className="flex items-center justify-center flex-row flex-wrap w-full">
                <MaybeField<ReleaseFormValues>
                  formik={formik}
                  name="release_date"
                  value={release_date}
                  element={
                    <h2 className="p-5 w-full transition-all text-center  tracking-wider text-xl lg:text-2xl uppercase font-heading">
                      {formatDate(release_date)}
                    </h2>
                  }
                >
                  <Calendar
                    width={400}
                    height={300}
                    selected={formik.values[`release_date`] || today.toDate()}
                    onSelect={(value: Date) => {
                      formik.setFieldValue(
                        `release_date`,
                        value.toDateString(),
                      );
                    }}
                  />
                </MaybeField>
                <MaybeField<ReleaseFormValues>
                  formik={formik}
                  name="buy"
                  customLabel="Purchase link"
                  value={buy}
                  element={
                    buy ? (
                      <>
                        <a
                          target="_blank"
                          title={`${purchaseText} ${name}`}
                          href={buy}
                          className="bg-pink p-5 w-full text-white transition-all hover:bg-pink-400 text-center   text-xl lg:text-2xl uppercase font-heading  tracking-widest"
                          rel="noreferrer"
                        >
                          {purchaseText}
                        </a>
                      </>
                    ) : null
                  }
                >
                  <Input
                    name={`buy`}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values[`buy`] || ``}
                  />
                </MaybeField>
              </div>
            </div>
          </header>
          <Reviews />
          <section className="w-full flex justify-center">
            <article className={styles.ReleasePageContent}>
              <MaybeField<ReleaseFormValues>
                formik={formik}
                name="description"
                value={description}
                element={<ReleaseContent content={description} />}
              >
                <RichTextField
                  value={description || DEFAULT_RICH_TEXT_EDITOR_COPY}
                  onChange={(value) => {
                    formik.setFieldValue(`description`, value);
                  }}
                />
              </MaybeField>
              <MaybeEmbedField<ReleaseFormValues>
                formik={formik}
                name="embeds"
                element={<Embeds embeds={embeds} />}
              >
                <EmbedField
                  embeds={embeds}
                  onChange={(embeds) => {
                    formik.setFieldValue(
                      `embed_code`,
                      embeds.map(({ content }) => content),
                    );
                  }}
                />
              </MaybeEmbedField>
              <ImagesExample />
            </article>
          </section>
        </div>
      </MaybeForm>
      {!isNew && (
        <WithCurrentUser>
          <CreateReviewFormContainer />
          <CreateSocialFormContainer />
        </WithCurrentUser>
      )}
    </>
  );
};
