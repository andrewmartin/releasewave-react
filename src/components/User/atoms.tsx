import { useAppContext } from '@/context/app';
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { showLoginModal, closeModal } from '@/context/app/actions';
import toast from 'react-hot-toast';
import Dropdown, { Option } from 'react-dropdown';
import atomStyles from '@/styles/Atoms.module.css';
import { useRouter } from 'next/router';

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

interface DropdownNavList {
  onChange: (option: Option) => void;
}

export const DropdownNavList: FC<PropsWithChildren<DropdownNavList>> = ({
  onChange,
}) => {
  const [value, setValue] = useState(``);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setValue(``);
    }, 1000);
  }, [router.asPath]);

  return (
    <Dropdown
      controlClassName={atomStyles.DropdownNavListControl}
      menuClassName={atomStyles.DropdownNavListMenu}
      value={value}
      options={[
        {
          label: `Admin Settings`,
          value: `/admin`,
        },
        {
          label: `Create Release`,
          value: `/admin/releases/new`,
        },
        {
          label: `Create Artist`,
          value: `/admin/artists/new`,
        },
      ]}
      onChange={(option) => {
        onChange(option);
      }}
      placeholder="Admin"
    />
  );
};

export const AdminNav: FC<{
  itemClassName: string;
  onClose?: () => void;
  hideLogin: boolean;
}> = ({ itemClassName, onClose, hideLogin }) => {
  const { dispatch } = useAppContext();
  const { push } = useRouter();

  return (
    <CurrentUser
      Fallback={() =>
        hideLogin ? null : (
          <li>
            <button
              onClick={showLoginModal(dispatch)}
              className={itemClassName}
            >
              Login
            </button>
          </li>
        )
      }
    >
      <li onClick={onClose && onClose}>
        <Logout itemClassName={itemClassName} />
      </li>
      <li className="px-2" onClick={onClose && onClose}>
        <DropdownNavList
          onChange={({ value }) => {
            push(value);
          }}
        />
      </li>
    </CurrentUser>
  );
};
