import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { RichTextField } from '../Fields/RichTextField';
import {
  MaybeForm,
  FormFooter,
  useFormContext,
  FormProvider,
} from '@/context/app/form';
import { useReleaseContext } from '@/context/release';
import { CreateReviewFormValues, onCreateReview } from '@/context/release/api';
import { Input } from '@/components/Atoms/InputField';
import { ReviewItemContent } from '@/components/Release/Reviews';
import { VALIDATIONS, DEFAULT_RICH_TEXT_EDITOR_COPY } from '@/util/constants';
import { FormikErrors, ServerErrors } from '@/components/Atoms/Errors';
import { modifyScore } from '@/util/forms';
import { useAppContext } from '@/context/app';
import { usePrevious } from 'react-use';

export const CreateReviewForm = () => {
  const { isEditing, setIsEditing } = useFormContext();
  const previousEditing = usePrevious(isEditing);
  const {
    state: { errors: serverErrors },
  } = useReleaseContext();
  const {
    dispatch: appDispatch,
    state: { user },
  } = useAppContext();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current && previousEditing !== isEditing && isEditing) {
      titleRef.current.scrollIntoView({ behavior: `smooth` });
    }
  }, [isEditing, previousEditing]);

  const {
    dispatch,
    state: { release },
  } = useReleaseContext();

  const formik = useFormik<CreateReviewFormValues>({
    initialValues: {
      id: ``,
      name: ``,
      content: ``,
      score: `0`,
    },
    onSubmit: async (values) => {
      await onCreateReview(dispatch, appDispatch)(
        values,
        release?.slug as string,
        () => {
          setIsEditing(false);
        },
      );
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      if (!values.name) {
        errors.name = VALIDATIONS.REQUIRED(`headline`);
      }

      if (!values.score) {
        errors.score = VALIDATIONS.REQUIRED(`score`);
      }

      if (parseInt(values.score) > 10 || parseInt(values.score) < 0) {
        errors.score = VALIDATIONS.SCORE(`score`);
      }

      if (!values.content || values.content === DEFAULT_RICH_TEXT_EDITOR_COPY) {
        errors.content = VALIDATIONS.REQUIRED(`content`);
      }

      return errors;
    },
  });

  if (!isEditing) {
    return (
      <div className="text-center w-full p-12 flex items-end justify-center">
        <button
          onClick={() => setIsEditing(true)}
          type="button"
          className="btn btn-primary"
        >
          Create Review
        </button>
      </div>
    );
  }

  return (
    <>
      <MaybeForm
        Footer={<FormFooter actionName="Create Review" />}
        handleSubmit={(event) => {
          formik.values.score = modifyScore(formik.values.score);
          formik.handleSubmit(event);
        }}
        className="space-y-6 w-full px-6"
      >
        <div className="w-full p-8 border-dashed border-2 border-gray-200 mb-12">
          <ReviewItemContent
            user={user!}
            name={formik.values.name}
            content={formik.values.content}
            score={formik.values.score}
          />
        </div>

        <h2 ref={titleRef} className="text-2xl tracking-tighter font-bold">
          Create Review
        </h2>
        <div className="mb-4">
          <label className="uppercase text-sm w-full not-italic font-semibold">
            Headline
          </label>
          <Input
            type="text"
            placeholder="Headline or name of review"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            autoFocus
          />
          <FormikErrors formik={formik} name={`name`} />
        </div>
        <div className="mb-4 flex items-center">
          <label className="uppercase text-sm mr-4 not-italic font-semibold">
            Score (between 0 and 10)
          </label>
          <Input
            type="number"
            placeholder="Score (0-10)"
            id="score"
            name="score"
            onChange={(event) => {
              formik.handleChange(event);
            }}
            value={formik.values.score}
            style={{
              width: `auto`,
            }}
          />
        </div>
        <FormikErrors formik={formik} name={`score`} />
        <RichTextField
          value={formik.values.content || DEFAULT_RICH_TEXT_EDITOR_COPY}
          onChange={(value) => {
            formik.setFieldValue(`content`, value);
          }}
        />
        <FormikErrors formik={formik} name={`content`} />
      </MaybeForm>
      <ServerErrors errors={serverErrors} />
    </>
  );
};

export const CreateReviewFormContainer = () => {
  return (
    <FormProvider>
      <CreateReviewForm />
    </FormProvider>
  );
};
