import Axios, { AxiosError } from 'axios';
import { AXIOS } from '@/api/axios';
import { FormikErrors } from '@/components/Atoms/Errors';
import { Input } from '@/components/Atoms/InputField';
import { AxiosResponse } from 'axios';
import { useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { FileField } from '../Fields/FileField';
import { Error } from '@/components/Atoms/Errors';

interface ICreateMediaFormValues {
  caption: string;
  image: string;
}

interface ICreateMediaFormPostValues {
  media: ICreateMediaFormValues;
}

type CreateMediaForm = {
  onSubmit: (medium: schema.Medium) => void;
};

export const CreateMediaForm: FC<CreateMediaForm> = (props) => {
  const { onSubmit } = props;
  const [serverError, setServerError] = useState<string>();

  const formik = useFormik<ICreateMediaFormValues>({
    initialValues: {
      caption: ``,
      image: ``,
    },
    onSubmit: async (values) => {
      try {
        const { data } = await AXIOS().instance.post<
          schema.Medium,
          AxiosResponse<schema.Medium>,
          ICreateMediaFormPostValues
        >(`media`, {
          media: values,
        });
        onSubmit(data);
      } catch (error) {
        setServerError(
          (error as any)?.response?.data?.error || `There was an error`,
        );
      }
    },
    validate: (values) => {
      const errors: Partial<ICreateMediaFormValues> = {};

      if (!values.image) {
        errors.image = `You must select a new image.`;
      }

      if (!values.caption) {
        errors.caption = `You must add a caption.`;
      }

      return errors;
    },
  });

  const { handleSubmit, handleChange, setFieldValue, values } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-1 mb-4">
        <FileField
          width={400}
          height={400}
          src=""
          name="image"
          onChange={(name, { data }) => {
            setFieldValue(`image`, data);
          }}
        />
        <FormikErrors formik={formik} name={`image`} />
      </div>
      <div>
        <Input
          placeholder="Image caption or description"
          name="caption"
          onChange={handleChange}
          value={values.caption}
          type="text"
        />
        <FormikErrors formik={formik} name={`caption`} />
      </div>

      {serverError && (
        <div className="w-full mb-8">
          <Error>{serverError}</Error>
        </div>
      )}

      <div className="w-full mt-4">
        <button className="btn btn-primary" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
