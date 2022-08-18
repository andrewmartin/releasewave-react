import { useAppContext } from '@/context/app';
import { FC, ReactNode } from 'react';

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
  return <button>Logout</button>;
};

export const LogInOrOut = () => {
  return (
    <CurrentUser Fallback={() => <div>Login</div>}>
      <Logout />
    </CurrentUser>
  );
};
