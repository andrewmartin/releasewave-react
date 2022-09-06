import React, { FC, Fragment, PropsWithChildren } from 'react';
import { useAppContext } from '@/context/app';
import { useFormik } from 'formik';
import { FormProviderProps } from '@/context/app/form';

/**
 * check for state of user logged in, also if they're admin
 */
export const useIsLoggedIn = (checkIsAdmin = true) => {
  const {
    state: { user },
  } = useAppContext();
  return checkIsAdmin ? Boolean(user?.is_admin) : Boolean(user?.id);
};
