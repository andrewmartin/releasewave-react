import { CONFIRM } from '@/util/constants';
import { MouseEventHandler } from 'react';
import { AppDispatch, ModalType } from '.';

type Event = Parameters<MouseEventHandler<HTMLButtonElement>>[number];
type MaybeMouseEvent = (event?: Event) => void;

export const showLoginModal =
  (dispatch: AppDispatch): MaybeMouseEvent =>
  (event) => {
    event && event.preventDefault();
    dispatch({
      type: `modal:show`,
      modal: `login`,
    });
  };

export const closeModal =
  (dispatch: AppDispatch, currentModal?: ModalType): MaybeMouseEvent =>
  (event) => {
    event && event.preventDefault();
    if (currentModal === `createReview`) {
      if (!CONFIRM()) return;
    }

    dispatch({
      type: `modal:close`,
    });
  };
