import { bindActionCreators } from 'redux';
import { actions as userActions } from '../reducers/user';
import { actions as artistActions } from '../reducers/artist';
import { actions as releaseActions } from '../reducers/release';
import { actions as modalActions } from '../reducers/modal';

export const bindAllActions = dispatch => ({
  actions: bindActionCreators(
    {
      ...userActions,
      ...artistActions,
      ...releaseActions,
      ...modalActions,
    },
    dispatch
  ),
});
