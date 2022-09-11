import React, { useEffect } from 'react';
import styles from './Artist.module.css';
import { useArtistContext } from '@/context/artist';
import { useFormik } from 'formik';
import {
  FormFooter,
  MaybeField,
  MaybeForm,
  useFormContext,
} from '@/context/app/form';

import { useRouter } from 'next/router';
import { RichTextField } from '../Forms/Fields/RichTextField';
import { FileField } from '../Forms/Fields/FileField';
import { ArtistSocialSelect } from '../Forms/Fields/Select';
import { SocialLinks, SOCIALS } from '../SocialLinks';
import classNames from 'classnames';
import { FullBgImage } from '../Atoms/FullBgImage';
import { useReleaseContext } from '@/context/release';
import { ReleaseItem } from '../Release/item';
import {
  ArtistFormValues,
  onCreateArtist,
  onEditArtist,
} from '@/context/artist/api';
import { DEFAULT_RICH_TEXT_EDITOR_COPY, VALIDATIONS } from '@/util/constants';
import { Input } from '../Atoms/InputField';
import { ServerSideWithAdminArgs } from '@/types/App';
import { BlankArtist } from '@/util/mock';
import { useAppContext } from '@/context/app';
import { ReleaseContent } from '../Atoms/ReleaseMeta';
import { Head, SeoProps } from '../Head';
import { WithCurrentUser } from '@/hooks/user';

export const ArtistPage = ({ isNew }: Partial<ServerSideWithAdminArgs>) => {
  const {
    state: { releases },
  } = useReleaseContext();
  const { dispatch: appDispatch } = useAppContext();
  const {
    dispatch,
    state: { artist },
  } = useArtistContext();
  const { isEditing, setIsEditing } = useFormContext();
  const { push } = useRouter();

  const formik = useFormik<ArtistFormValues>({
    initialValues: {
      name: artist?.name || ``,
      id: artist?.id || 1,
      short_description: artist?.short_description || ``,
      spotify: artist?.spotify || ``,
      facebook: artist?.facebook || ``,
      twitter: artist?.twitter || ``,
      bandcamp: artist?.bandcamp || ``,
      itunes: artist?.itunes || ``,
      soundcloud: artist?.soundcloud || ``,
      website: artist?.website || ``,
      instagram: artist?.instagram || ``,
    },
    onSubmit: async (values) => {
      if (isNew) {
        return await onCreateArtist(dispatch, appDispatch)(values, (slug) => {
          setIsEditing(false);
          push(`/artists/${slug}`);
        });
      }

      await onEditArtist(dispatch, appDispatch)(values, (slug) => {
        console.log(`onsuccess`, slug);
        setIsEditing(false);
        push(`/artists/${slug}`);
      });
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      console.log(`values`, values);

      if (!values.name) {
        errors.name = VALIDATIONS.REQUIRED(`name`);
      }

      if (values.name === BlankArtist.name) {
        errors.name = VALIDATIONS.CHANGE_FROM_DEFAULT(
          `name`,
          values?.name as string,
        );
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

  if (!artist) {
    return null; // redirect?
  }

  const { name, short_description, image } = artist;

  const title = `${name}`;

  const seo: SeoProps = {
    title,
    description: `Music Releases from ${name} on Release Wave.`,
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
        <div className={styles.ArtistPage}>
          <MaybeField<ArtistFormValues>
            formik={formik}
            name="Artist Image"
            value={name}
            className="justify-center flex w-full flex-wrap"
            element={
              <FullBgImage
                className="grayscale opacity-50 blur-sm"
                src={artist?.image.large as string}
                alt={`${artist?.name} image`}
              />
            }
          >
            <FileField
              width={400}
              height={400}
              src={image?.large}
              name="image"
              onChange={(name, values) => {
                formik.setFieldValue(name, {
                  ...values,
                });
              }}
            />
          </MaybeField>
          <header className={styles.ArtistPageHeader}>
            <div className={styles.ArtistPageTitleContainer}>
              <MaybeField<ArtistFormValues>
                formik={formik}
                name="name"
                value={name}
                element={<h2 className={styles.ArtistPageTitle}>{name}</h2>}
              >
                <Input
                  name={`name`}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values[`name`] || ``}
                />
              </MaybeField>
              <SocialLinks {...artist} />
              {isEditing && (
                <WithCurrentUser>
                  <cite className="w-full text-gray-500 mb-8 block">
                    If you have issues seeing items load in the dropdowns,
                    please wait a moment or two. You may be hitting API limits
                    since we are on the free Google API plan. It should clear up
                    in 1 minute or so (just try adding an empty space to the
                    {` `}
                    {`"name"`} field, then remove it; this will force the links
                    below to refresh)
                  </cite>
                </WithCurrentUser>
              )}
              {SOCIALS.map((socialName) => (
                <MaybeField<ArtistFormValues>
                  formik={formik}
                  key={socialName}
                  name={socialName}
                  value={name}
                  element={<div></div>}
                >
                  <ArtistSocialSelect
                    artistName={formik.values.name as string}
                    socialName={socialName}
                    initialValue={{
                      value: `${formik.values[socialName]}`,
                      label: `${formik.values[socialName]}`,
                    }}
                    onChange={(optionValue) => {
                      formik.setFieldValue(socialName, optionValue?.value);
                    }}
                    onRemove={() => {
                      formik.setFieldValue(socialName, ``);
                    }}
                  />
                </MaybeField>
              ))}
            </div>
          </header>
          <article
            className={classNames(`w-full`, {
              [`p-16 text-base box-item bg-white ${styles.ArtistPageContent}`]:
                Boolean(short_description),
            })}
          >
            {short_description && (
              <h2 className="text-[1.5em] md:!text-[2em] font-bold tracking-[-0.045em] mb-6 border-b-2 border-b-gray-300 inline-block">
                About this Artist
              </h2>
            )}
            <MaybeField<ArtistFormValues>
              formik={formik}
              name="short_description"
              value={short_description}
              element={<ReleaseContent content={short_description} />}
            >
              <RichTextField
                value={short_description || DEFAULT_RICH_TEXT_EDITOR_COPY}
                onChange={(value) => {
                  formik.setFieldValue(`short_description`, value);
                }}
              />
            </MaybeField>
          </article>

          {!isEditing && (
            <div className="mb-8 p-16 md:mb-16 w-full bg-white md:p-16 box-item">
              <section className="mb-24">
                <h2 className="text-[1.5em] md:!text-[2em] font-bold tracking-[-0.045em] mb-6 border-b-2 border-b-gray-300 inline-block">
                  Releases
                </h2>
                <div className="w-full">
                  {releases?.items?.length ? (
                    <cite className="text-base text-gray-500">
                      Releases we have curated and recommend to yours truly.
                    </cite>
                  ) : (
                    <cite className="text-base text-gray-500">
                      We are working on finding releases to recommend to you by
                      {` `}
                      {artist.name}.
                    </cite>
                  )}
                </div>
              </section>
              <div className="bg-white">
                {releases?.items.map((release) => {
                  return (
                    <ReleaseItem
                      key={release.id}
                      showArtist={false}
                      showContentDefault
                      classNames={{
                        container: styles.ReleaseItem,
                      }}
                      {...release}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </MaybeForm>
    </>
  );
};
