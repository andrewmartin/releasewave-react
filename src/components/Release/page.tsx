import React, { FC } from 'react';
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
  FormProvider,
  MaybeField,
  MaybeForm,
  useFormContext,
} from '@/context/app/form';
import { IReleaseFormValues, onEditRelease } from '@/context/release/api';
import { useRouter } from 'next/router';
import { RichTextField } from '../Forms/Fields/RichTextField';
import { FileField } from '../Forms/Fields/FileField';
import { appendHostToImage } from '@/util/image';
import { ArtistSelect } from '../Forms/Fields/Select';
import { SocialLinks } from '../SocialLinks';
import Link from 'next/link';

const ReleasePageContent = () => {
  const {
    dispatch,
    state: { release },
  } = useReleaseContext();
  const { isEditing, setIsEditing } = useFormContext();
  const { push } = useRouter();
  const artist = release ? getFirstArtist(release) : undefined;
  const formik = useFormik<IReleaseFormValues>({
    initialValues: {
      id: release?.id,
      name: release?.name || ``,
      description: release?.description || ``,
      image: ``,
      artist_ids: artist ? [artist.id] : [],
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
      await onEditRelease(dispatch)(values, (slug) => {
        console.log(`onsuccess`, slug);
        setIsEditing(false);
        push(`/releases/${slug}`);
      });
    },
  });

  if (!release) {
    return null;
  }

  if (!release) {
    return null;
  }

  const { description, name, image, artists } = release;

  const bgImage =
    artists.length && artists[0].image ? artists[0].image.full : null;

  return (
    <MaybeForm handleSubmit={formik.handleSubmit}>
      <div className={styles.ReleasePage}>
        <header className={styles.ReleasePageHeader}>
          <div className={styles.ReleasePageArt}>
            <MaybeField<IReleaseFormValues>
              formik={formik}
              name="image"
              value={name}
              element={
                <Image
                  src={appendHostToImage(image.large)}
                  alt={`${name}`}
                  width={400}
                  height={400}
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
          </div>
          <div className={styles.ReleasePageTitle}>
            <MaybeField<IReleaseFormValues>
              formik={formik}
              name="name"
              value={name}
              element={<h2>{name}</h2>}
            >
              <input
                name={`name`}
                onChange={formik.handleChange}
                className="w-full"
                type="text"
                value={formik.values[`name`] || ``}
              />
            </MaybeField>

            <span>
              <MaybeField<IReleaseFormValues>
                formik={formik}
                name="artist"
                value={name}
                element={<FirstArtistForRelease {...release} />}
              >
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
              </MaybeField>
              <MaybeField<IReleaseFormValues>
                formik={formik}
                name="social"
                value={name}
                element={artist ? <SocialLinks {...artist} /> : null}
              >
                <>
                  {artist ? <SocialLinks {...artist} /> : null}
                  <Link href={`/artists/${artist?.slug}`}>
                    <a className="mt-2 text-pink hover:underline hover:text-pink-500 transition-all flex items-center space-x-2">
                      <FaLink></FaLink>
                      <em className="text-sm">
                        Edit Socials on the Artist Page
                      </em>
                    </a>
                  </Link>
                </>
              </MaybeField>
            </span>
          </div>
        </header>
        <section>
          <article className={styles.ReleasePageContent}>
            <MaybeField<IReleaseFormValues>
              formik={formik}
              name="description"
              value={description}
              element={
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${description}`,
                  }}
                ></div>
              }
            >
              <RichTextField
                value={description || `<p>Create a description</p>`}
                onChange={(value) => {
                  formik.setFieldValue(`description`, value);
                }}
              />
            </MaybeField>
          </article>
        </section>
      </div>
    </MaybeForm>
  );
};

export const ReleasePage: FC = () => {
  return (
    <FormProvider>
      <ReleasePageContent />
    </FormProvider>
  );
};
