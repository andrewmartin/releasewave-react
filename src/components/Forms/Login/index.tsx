import React from 'react';
import { useFormik } from 'formik';
import { useAppContext } from '@/context/app';
import { ISignupFormValues, onSubmitLogin } from '@/context/app/api';
import { Input } from '@/components/Atoms/InputField';

export const LoginForm = () => {
  const {
    dispatch,
    state: { errors, modalMessage },
  } = useAppContext();

  const { handleSubmit, handleChange, values } = useFormik<ISignupFormValues>({
    initialValues: {
      email: ``,
      password: ``,
    },
    onSubmit: onSubmitLogin(dispatch),
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {modalMessage && (
          <div className="mb-6 text-md border-2 border-pink p-6">
            {modalMessage}
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Username
          </label>
          <Input
            type="text"
            placeholder="Email Address"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="*********"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        </div>

        <div className="mb-6">
          {errors.get(`user`) && (
            <p className="text-pink text-xs italic mb-2 text-center">
              {errors.get(`user`)}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
          {/* <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </button> */}
        </div>
      </form>
    </div>
  );
};
