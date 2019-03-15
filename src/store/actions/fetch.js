import { sendNotification } from 'store/actions/notifications';

export const fetchAction = (path, options) => ({
  type: 'FETCH',
  path,
  ...options,
});

export function fetchStart(type) {
  return {
    type,
  };
}

export function fetchSuccess(payload, type, notification) {
  return dispatch => {
    if (notification) dispatch(sendNotification(notification, 'info'));
    dispatch({
      type,
      payload,
    });
  };
}

export function fetchError(payload, type, notification) {
  return dispatch => {
    if (notification) dispatch(sendNotification(notification, 'danger'));
    return dispatch({
      type,
      payload,
    });
  };
}
