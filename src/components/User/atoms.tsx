import { useAppContext } from '@/context/app';
import { FC, ReactNode } from 'react';
import { showLoginModal, closeModal } from '@/context/app/actions';
import Link from 'next/link';
import toast from 'react-hot-toast';

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

const Logout: FC<{
  itemClassName: string;
}> = ({ itemClassName }) => {
  const { dispatch } = useAppContext();

  return (
    <button
      onClick={(event) => {
        dispatch({
          type: `logout`,
        });
        closeModal(dispatch)(event);
        toast(`logged out!`);
      }}
      className={itemClassName}
    >
      Logout
    </button>
  );
};

export const AdminNav: FC<{
  itemClassName: string;
  onClose?: () => void;
}> = ({ itemClassName, onClose }) => {
  const { dispatch } = useAppContext();

  return (
    <CurrentUser
      Fallback={() => (
        <li>
          <button onClick={showLoginModal(dispatch)} className={itemClassName}>
            Login
          </button>
        </li>
      )}
    >
      <li onClick={onClose && onClose}>
        <Logout itemClassName={itemClassName} />
      </li>
      <li onClick={onClose && onClose}>
        <Link href="/admin">
          <a className={itemClassName}>Admin</a>
        </Link>
      </li>
    </CurrentUser>
  );
};
