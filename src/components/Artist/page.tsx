import React from 'react';
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
import { ArtistFormValues, onEditArtist } from '@/context/artist/api';
import { DEFAULT_RICH_TEXT_EDITOR_COPY, VALIDATIONS } from '@/util/constants';
import { Input } from '../Atoms/InputField';

export const ArtistPage = () => {
  const {
    state: { releases },
  } = useReleaseContext();
  const {
    dispatch,
    state: { artist },
  } = useArtistContext();
  const { isEditing, setIsEditing } = useFormContext();
  const { push } = useRouter();

  const formik = useFormik<ArtistFormValues>({
    initialValues: {
      name: artist?.name,
      id: artist?.id,
      short_description: artist?.short_description,
      spotify: artist?.spotify,
      facebook: artist?.facebook,
      twitter: artist?.twitter,
      bandcamp: artist?.bandcamp,
      itunes: artist?.itunes,
      soundcloud: artist?.soundcloud,
      website: artist?.website,
      instagram: artist?.instagram,
    },
    onSubmit: async (values) => {
      await onEditArtist(dispatch)(values, (slug) => {
        console.log(`onsuccess`, slug);
        setIsEditing(false);
        push(`/artists/${slug}`);
      });
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      if (!values.name) {
        errors.name = VALIDATIONS.REQUIRED(`name`);
      }

      if (
        !values.short_description ||
        values.short_description === DEFAULT_RICH_TEXT_EDITOR_COPY
      ) {
        errors.short_description = VALIDATIONS.REQUIRED(`short_description`);
      }

      return errors;
    },
  });

  if (!artist) {
    return null;
  }

  if (!artist) {
    return null;
  }

  const { name, image, short_description } = artist;

  return (
    <MaybeForm
      Footer={<FormFooter actionName="Edit" />}
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
              src={artist?.image.large as string}
              alt={`${artist?.name} image`}
            />
          }
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
        <header className={styles.ArtistPageHeader}>
          <div className={styles.ArtistPageTitleContainer}>
            <MaybeField<ArtistFormValues>
              formik={formik}
              name="name"
              value={name}
              element={
                <h2 className={styles.ArtistPageTitle}>{artist.name}</h2>
              }
            >
              <Input
                name={`name`}
                onChange={formik.handleChange}
                type="text"
                value={formik.values[`name`] || ``}
              />
            </MaybeField>
            <SocialLinks {...artist} />
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
          className={classNames(styles.ArtistPageContent, {
            'prose prose-2xl bg-white px-8': !isEditing,
          })}
        >
          <MaybeField<ArtistFormValues>
            formik={formik}
            name="short_description"
            value={short_description}
            element={
              <div
                dangerouslySetInnerHTML={{
                  __html: short_description ? `${short_description}` : ``,
                }}
              ></div>
            }
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
          <section className="bg-white p-12">
            <div className="mb-16">
              <h2 className="text-2xl font-bold tracking-tighter">Releases</h2>
              <cite>
                Releases we have curated and recommend to yours truly.
              </cite>
            </div>
            {releases?.items.map((release) => {
              return <ReleaseItem release={release} key={release.id} />;
            })}
          </section>
        )}
      </div>
    </MaybeForm>
  );
};
