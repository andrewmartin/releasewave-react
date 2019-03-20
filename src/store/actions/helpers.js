import { bindActionCreators } from 'redux';
import { actions as userActions } from '../reducers/user';
import { actions as artistActions } from '../reducers/artist';
import { actions as releaseActions } from '../reducers/release';
import { actions as modalActions } from '../reducers/modal';
import { actions as reviewActions } from '../reducers/review';
import { action as toggleMenu } from 'redux-burger-menu';

export const bindAllActions = dispatch => ({
  dispatch,
  actions: bindActionCreators(
    {
      ...userActions,
      ...artistActions,
      ...releaseActions,
      ...modalActions,
      ...reviewActions,
      toggleMenu,
    },
    dispatch
  ),
});
