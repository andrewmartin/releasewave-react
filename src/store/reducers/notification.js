import { actions as notifActions } from 'redux-notifications';

const { notifSend, notifClear } = notifActions;

export function sendNotification(message, kind = 'success', dismissAfter = 5000) {
  return dispatch => {
    dispatch(notifClear());
    return dispatch(
      notifSend({
        message,
        kind,
        dismissAfter,
      })
    );
  };
}
