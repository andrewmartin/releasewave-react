import React from 'react';
import { FormikValues, useFormik } from 'formik';

interface FormikErrors<Values extends FormikValues = FormikValues> {
  name: string;
  formik: ReturnType<typeof useFormik<Values>>;
}

export function FormikErrors<T extends FormikValues = FormikValues>(
  props: FormikErrors<T>,
) {
  const {
    name,
    formik: { errors },
  } = props;

  if (name in errors) {
    return (
      <div className="w-full p-4 text-pink border-2 border-pink mt-4">
        {(errors as any)[name]}
      </div>
    );
  }

  return null;
}
