import React from 'react';
import { useFormik } from 'formik';
import {
  MaybeForm,
  FormFooter,
  useFormContext,
  FormProvider,
} from '@/context/app/form';
import { useReleaseContext } from '@/context/release';
import { CreateSocialFormValues } from '@/context/release/api';
import { VALIDATIONS, DEFAULT_RICH_TEXT_EDITOR_COPY } from '@/util/constants';
import { ServerErrors } from '@/components/Atoms/Errors';
import { useAppContext } from '@/context/app';
import Select from 'react-select';
import { Textarea } from '@/components/Atoms/InputField';
import { Release, User } from '@/types/Data';
import { getFirstArtist } from '@/components/Atoms/FirstArtistForRelease';
import { formatDateSocial } from '@/util/date';
import { decode } from 'html-entities';

import clipboardy from 'clipboardy';
import toast from 'react-hot-toast';
import Link from 'next/link';

type ContentOption = {
  value: string;
  label: string;
  type?: 'review' | 'release';
};

const stripHtml = (string: string) => {
  const nonHtml = string.replace(/(<([^>]+)>)/gi, ``);

  return decode(nonHtml);
};

const socialLeadText = (release: Release) => {
  const artist = getFirstArtist(release);

  return `${artist?.name?.toLowerCase()} - ${release?.name?.toLowerCase()} - ${formatDateSocial(
    release.release_date,
  )}`;
};

const buildValue = (content: string, release?: Release, user?: User) => {
  if (!release) {
    return ``;
  }

  return `${socialLeadText(release)}\n\n${stripHtml(content)}${
    user ? `\n\n-${user.name}` : ``
  }`;
};

export const CreateSocialForm = () => {
  const { isEditing, setIsEditing } = useFormContext();
  const {
    state: { errors: serverErrors },
  } = useReleaseContext();
  const {
    state: { user },
  } = useAppContext();

  const {
    state: { release, reviews },
  } = useReleaseContext();

  const formik = useFormik<CreateSocialFormValues>({
    initialValues: {
      content: buildValue(release?.description || ``, release),
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      clipboardy.write(values.content);
      toast(`${values.content} \n\ncopied to clipboard!`);
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      if (!values.content || values.content === DEFAULT_RICH_TEXT_EDITOR_COPY) {
        errors.content = VALIDATIONS.REQUIRED(`content`);
      }

      return errors;
    },
  });

  if (!release) {
    return null;
  }

  if (!isEditing) {
    return (
      <div className="text-center w-full p-12 flex items-end justify-center">
        <button
          onClick={() => setIsEditing(true)}
          type="button"
          className="btn btn-primary"
        >
          Create Social Post
        </button>
      </div>
    );
  }

  const reviewOptions = reviews?.items?.length
    ? reviews.items
        ?.map((review) => {
          return {
            label: review.name || ``,
            value: stripHtml(review?.content || ``),
            type: `review`,
          };
        })
        .filter((n) => n)
    : undefined;

  let options = [
    {
      label: `Release Description`,
      value: stripHtml(release?.description || ``),
    },
  ];

  if (reviewOptions) {
    options = options.concat(reviewOptions);
  }

  return (
    <>
      <MaybeForm
        Footer={
          <FormFooter
            ServerErrors={<ServerErrors errors={serverErrors} />}
            actionName="Preview Social Post"
          />
        }
        handleSubmit={(event) => {
          formik.handleSubmit(event);
        }}
        className="space-y-6 w-full px-6"
      >
        <div className="w-full p-8 border-dashed border-2 border-gray-200 mb-12">
          <div className="mb-6">
            <h3 className="w-full text-[2em] font-bold tracking-tight mb-2">
              Social Post
            </h3>
            <p className="text-lg">
              Preview a social post here; copy it to your clipboard by clicking
              &quot;Submit&quot;.
            </p>
          </div>
          <pre className="mb-4 text-[1.2em]">{socialLeadText(release)}</pre>
          <Textarea
            placeholder="Enter some social media content"
            value={`${formik?.values.content}`}
            onChange={(event) => {
              formik.setFieldValue(`content`, event.currentTarget.value);
            }}
            minLength={200}
            className="min-h-[350px] text-sm"
          />
          <div className="mb-6 mt-4">
            <h3 className="w-full text-[1.5em] font-bold tracking-tight mb-2">
              Prefill Content
            </h3>
            <p className="text-lg mb-3 w-full">
              Prefill content here using this dropdown to select either the
              Release description or Review content.
            </p>

            <Select<ContentOption>
              isSearchable={false}
              options={options}
              onChange={(value) => {
                if (value?.type === `review`) {
                  return formik.setFieldValue(
                    `content`,
                    buildValue(value?.value || ``, release, user),
                  );
                }
                formik.setFieldValue(
                  `content`,
                  buildValue(value?.value || ``, release),
                );
              }}
            />
          </div>
          <div className="mb-6 mt-8 w-full flex flex-wrap">
            <Link
              href="https://instagram.com/releasewave"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary block mr-4 mb-2 md:mb-0"
            >
              Post to Instagram
            </Link>
            <Link
              href="https://facebook.com/releasewave"
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-primary block mr-4 mb-2 md:mb-0"
            >
              Post to Facebook
            </Link>
          </div>
        </div>
      </MaybeForm>
    </>
  );
};

export const CreateSocialFormContainer = () => {
  return (
    <FormProvider>
      <CreateSocialForm />
    </FormProvider>
  );
};
