import { AppDispatch, useAppContext } from '@/context/app';
import { FC, MouseEventHandler, ReactNode } from 'react';
import atomStyles from '@/styles/Atoms.module.css';
import { showLoginModal, closeModal } from '@/context/app/actions';

interface WithUser {
  children: ReactNode;
  Fallback?: React.FC;
}

export const CurrentUser: FC<WithUser> = (props) => {
  const { children, Fallback, ...restProps } = props;
  const { state } = useAppContext();

  if (state.user?.id) {
    return <>{children}</>;
  }

  return Fallback ? <Fallback {...restProps} /> : null;
};

const Logout = () => {
  const { dispatch } = useAppContext();

  return (
    <button
      onClick={(event) => {
        dispatch({
          type: `logout`,
        });
        closeModal(dispatch)(event);
      }}
      className={atomStyles.NavLinkButton}
    >
      Logout
    </button>
  );
};

export const LogInOrOut = () => {
  const { dispatch } = useAppContext();

  return (
    <CurrentUser
      Fallback={() => (
        <button
          onClick={showLoginModal(dispatch)}
          className={atomStyles.NavLinkButton}
        >
          Login
        </button>
      )}
    >
      <Logout />
    </CurrentUser>
  );
};
