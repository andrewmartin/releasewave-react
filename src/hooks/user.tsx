import React, { FC, PropsWithChildren } from 'react';
import { useAppContext } from '@/context/app';
import { User } from '@/types/Data';

/**
 * check for state of user logged in, also if they're admin
 */
export const useIsLoggedIn = (checkIsAdmin = true) => {
  const {
    state: { user },
  } = useAppContext();
  return checkIsAdmin ? Boolean(user?.is_admin) : Boolean(user?.id);
};

export const useCurrentUser = () => {
  return useAppContext().state.user;
};

interface WithLoggedIn extends PropsWithChildren {
  userId?: User['id'];
}

export const WithCurrentUser: FC<WithLoggedIn> = (props) => {
  const { children, userId } = props;
  const currentUser = useCurrentUser();

  if (!currentUser) {
    return null;
  }

  if (userId && userId !== currentUser.id) {
    return null;
  }

  return <>{children}</>;
};
