import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import cx from 'classnames';
import { useAppContext } from '@/context/app';
import { LoginForm } from '../Forms/Login';
import styles from './Modal.module.css';
import { OutsideClick } from '@/hooks/useOutsideAlerter';
import { closeModal } from '@/context/app/actions';
import { Debug } from '../Debug';
import { ReactPortal } from '../Layout/Portal';
import { LayoutProps } from '../Layout';
import { MediaModal } from './media';

const CONTENT_DELAY = 250;

interface ModalWrapper {
  children: ReactNode;
  isActive: boolean;
  className?: string;
}

const ModalWrapper: FC<ModalWrapper> = (props) => {
  const { className, isActive, children } = props;
  const [contentIn, setContentIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentIn(props.isActive);
    }, CONTENT_DELAY);
  }, [props.isActive]);

  return (
    <ReactPortal wrapperId="_modal">
      <div
        className={cx(styles.Backdrop, {
          [styles.BackdropActive]: isActive,
          [styles.BackdropInactive]: !isActive,
        })}
      >
        <div
          className={cx(styles.Content, className, {
            [styles.ContentActive]: contentIn,
            [styles.ContentInactive]: !contentIn,
            [styles.ContentHalf]: !className,
          })}
        >
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

interface ModalContainerProps {
  layoutProps: LayoutProps;
}

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">{children}</div>
  );
};

export const ModalContainer = ({ layoutProps }: ModalContainerProps) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    function listener(event: DocumentEventMap['keyup']) {
      const { key } = event;
      if (key === `~` && state.user) {
        dispatch({
          type: `modal:show`,
          modal: `debug`,
        });
      }
      if (key === `Escape`) {
        closeModal(dispatch)();
        document.removeEventListener(`keyup`, listener);
      }
    }

    document.addEventListener(`keyup`, listener);
  }, [dispatch, state.activeModal, state.user]);

  const Element = () => {
    switch (state.activeModal) {
      case `login`:
        return <LoginForm />;
      case `media`:
        return <MediaModal />;
      case `debug`:
        return <Debug layoutProps={layoutProps} />;
      default:
        return null;
    }
  };

  const modalClassName =
    state.activeModal && [`media`].includes(state.activeModal)
      ? `w-[90%] h-full`
      : undefined;

  return (
    <ModalWrapper
      className={modalClassName}
      isActive={Boolean(state.activeModal)}
    >
      <OutsideClick
        onClick={closeModal(dispatch)}
        show={Boolean(state.activeModal)}
      >
        <Wrapper>
          <Element />
        </Wrapper>
      </OutsideClick>
    </ModalWrapper>
  );
};
