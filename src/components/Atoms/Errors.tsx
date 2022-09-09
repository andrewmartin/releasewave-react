import React, { FC, PropsWithChildren } from 'react';
import { FormikValues, useFormik } from 'formik';
import { AllFetchTypes } from '@/types/App';

interface FormikErrors<Values extends FormikValues = FormikValues> {
  name: string;
  formik: ReturnType<typeof useFormik<Values>>;
}

const Error: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="text-sm w-full p-4 text-pink border-2 border-pink mt-4 text-left flex justify-start tracking-wide">
      {children}
    </div>
  );
};

export function FormikErrors<T extends FormikValues = FormikValues>(
  props: FormikErrors<T>,
) {
  const {
    name,
    formik: { errors },
  } = props;

  if (name in errors) {
    return <Error>{(errors as any)[name]}</Error>;
  }

  return null;
}

export const ServerErrors: FC<
  PropsWithChildren<{
    errors: Map<AllFetchTypes, string | undefined>;
  }>
> = ({ errors }) => {
  const errorMessages: string[] = [];

  for (const key of errors.keys()) {
    const value = errors.get(key);
    if (value) {
      errorMessages.push(value);
    }
  }

  if (errorMessages.length) {
    return (
      <div className="w-full mb-8">
        {errorMessages.map((error, idx) => (
          <Error key={`${error}-${idx}`}>{error}</Error>
        ))}
      </div>
    );
  }

  return null;
};
