import { MouseEventHandler } from 'react';
import { AppDispatch } from '.';

type Event = Parameters<MouseEventHandler<HTMLButtonElement>>[number];
type MaybeMouseEvent = (event?: Event) => void;

export const showLoginModal =
  (dispatch: AppDispatch): MaybeMouseEvent =>
  (event) => {
    event && event.preventDefault();
    console.log(`modal`);

    dispatch({
      type: `modal:show`,
      modal: `login`,
    });
  };

export const closeModal =
  (dispatch: AppDispatch): MaybeMouseEvent =>
  (event) => {
    event && event.preventDefault();
    dispatch({
      type: `modal:close`,
    });
  };
