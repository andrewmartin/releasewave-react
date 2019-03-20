import { combineReducers } from 'redux';
import { routerReducer } from 'connected-next-router';

import { reducer as notifReducer } from 'redux-notifications';
import { reducer as burgerMenu } from 'redux-burger-menu';

// import data from './data';
import user from './user';
import artist from './artist';
import release from './release';
import modal from './modal';
import review from './review';

const rootReducer = combineReducers({
  modal,
  artist,
  release,
  user,
  // data,
  review,
  router: routerReducer,
  notifs: notifReducer,
  burgerMenu,
});

export default rootReducer;
