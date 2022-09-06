import React, { ReactNode, useEffect, useState } from 'react';
import cx from 'classnames';
import { useAppContext } from '@/context/app';
import { LoginForm } from '../Forms/Login';
import styles from './Modal.module.css';
import { OutsideClick } from '@/hooks/useOutsideAlerter';
import { closeModal } from '@/context/app/actions';
import { Debug } from '../Debug';
import { ReactPortal } from '../Layout/Portal';
import { LayoutProps } from '../Layout';

const CONTENT_DELAY = 250;

const ModalWrapper = (props: { children: ReactNode; isActive: boolean }) => {
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
          [styles.BackdropActive]: props.isActive,
          [styles.BackdropInactive]: !props.isActive,
        })}
      >
        <div
          className={cx(styles.Content, {
            [styles.ContentActive]: contentIn,
            [styles.ContentInactive]: !contentIn,
          })}
        >
          {props.children}
        </div>
      </div>
    </ReactPortal>
  );
};

interface ModalContainerProps {
  layoutProps: LayoutProps;
}

export const ModalContainer = ({ layoutProps }: ModalContainerProps) => {
  const { state, dispatch } = useAppContext();
  const [currentModal, setCurrentModal] = useState(state.activeModal);

  useEffect(() => {
    setCurrentModal(state.activeModal);
    document.addEventListener(`keydown`, ({ key }) => {
      if (key === `~`) {
        setCurrentModal(`debug`);
      }
      if (key === `Escape`) {
        setCurrentModal(undefined);
      }
    });
  }, [state.activeModal]);

  const Element = () => {
    switch (currentModal) {
      case `login`:
        return <LoginForm />;
      case `debug`:
        return <Debug layoutProps={layoutProps} />;

      default:
        return null;
    }
  };

  return (
    <ModalWrapper isActive={Boolean(currentModal)}>
      <OutsideClick onClick={closeModal(dispatch)} show={Boolean(currentModal)}>
        <Element />
      </OutsideClick>
    </ModalWrapper>
  );
};
