import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import { createRouterMiddleware } from 'connected-next-router';

import ApiService from 'api/service';
import fetchMiddleware from 'middleware/fetch';

import localForage from 'localforage';

import rootReducer from './reducers';

export default function configureStore(initialState = {}, options) {
  const persistedReducer = persistReducer(
    {
      storage: localForage,
      key: 'primary',
      whitelist: ['user'],
    },
    rootReducer
  );
  const reducer = options.isServer ? rootReducer : persistedReducer;

  if (options.isServer) {
    // console.log('options from server', options.req && options.req.originalUrl);
    // initialState.router = initialRouterState(options.req && options.req.originalUrl);
  }

  const routerMiddleware = createRouterMiddleware();

  return createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware, thunkMiddleware, fetchMiddleware(ApiService.api))
    )
  );
}
