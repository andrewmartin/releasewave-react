import React from 'react';
import { useFormik } from 'formik';
import { useAppContext } from '@/context/app';

import { Audio } from 'react-loader-spinner';
import { ISignupFormValues, onSubmitLogin } from '@/context/app/api';

export const LoginForm = () => {
  const {
    dispatch,
    state: { fetching, errors },
  } = useAppContext();

  const formik = useFormik<ISignupFormValues>({
    initialValues: {
      email: ``,
      password: ``,
    },
    onSubmit: onSubmitLogin(dispatch),
  });

  return (
    <div className="w-full max-w-xs">
      {fetching.get(`user`) && (
        <div className="flex items-center justify-center">
          <Audio
            height="50"
            width="50"
            color={`#AC1E8C`}
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <form
        onSubmit={formik.handleSubmit}
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email Address"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
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
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
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
