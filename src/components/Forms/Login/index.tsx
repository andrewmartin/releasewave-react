import React from 'react';
import { useFormik } from 'formik';
import { useAppContext } from '@/context/app';
import { ISignupFormValues, onSubmitLogin } from '@/context/app/api';

export const LoginForm = () => {
  const {
    dispatch,
    state: { errors },
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
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full"
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
          <input
            className="w-full"
            id="password"
            type="password"
            placeholder="******************"
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
          <button
            className="bg-pink hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-pink-600 hover:transition-colors"
            type="submit"
          >
            Sign In
          </button>
          <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};
