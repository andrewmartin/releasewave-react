import { User } from '@/types/User';
import { clearBrowserCookies } from '@/util/cookie';
import { assertUnreachable } from '@/util/unreachable';
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

type FetchType = 'user';
type ModalType = 'login' | 'debug';

export type AppAction =
  | { type: 'logout' }
  | { type: 'login'; fetchType: FetchType; user: User }
  | { type: 'error'; fetchType: FetchType; message: string }
  | { type: 'start'; fetchType: FetchType; isFetching: boolean }
  | { type: 'modal:show'; modal: ModalType }
  | { type: 'modal:close' }
  | { type: 'done'; fetchType: FetchType };

interface AppState {
  user?: User;
  fetching: Map<FetchType, boolean>;
  errors: Map<FetchType, string | undefined>;
  activeModal?: ModalType;
}

interface AppContext {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}

export type AppDispatch = Dispatch<AppAction>;

const initialState = {
  fetching: new Map([[`user` as FetchType, false]]),
  errors: new Map([[`user` as FetchType, undefined]]),
  user: undefined,
};

interface AppWrapperProps {
  children: ReactNode;
  user?: User;
}

function appReducer(prevState: AppState, action: AppAction) {
  switch (action.type) {
    case `logout`: {
      delete prevState.user;
      clearBrowserCookies();
      return prevState;
    }
    case `login`: {
      return {
        ...prevState,
        user: action.user,
        fetching: new Map(prevState.fetching).set(action.fetchType, false),
      };
    }
    case `start`: {
      return {
        ...prevState,
        errors: prevState.errors.set(action.fetchType, undefined),
        fetching: new Map(prevState.fetching).set(
          action.fetchType,
          action.isFetching,
        ),
      };
    }
    case `done`: {
      return {
        ...prevState,
      };
    }
    case `error`: {
      return {
        ...prevState,
        errors: prevState.errors.set(action.fetchType, action.message),
        fetching: new Map(prevState.fetching).set(action.fetchType, false),
      };
    }
    case `modal:show`: {
      return {
        ...prevState,
        activeModal: action.modal,
      };
    }
    case `modal:close`: {
      return {
        ...prevState,
        activeModal: undefined,
      };
    }

    default: {
      return assertUnreachable(action);
    }
  }
}

const AppContext = createContext<AppContext>({
  state: initialState,
  dispatch: () => {
    return;
  },
});

export const useAppContext = () => useContext(AppContext);

export function AppWrapper(props: AppWrapperProps) {
  const { children, user } = props;
  const [reducerState, reducerDispatch] = useReducer(appReducer, {
    ...initialState,
    user,
  });

  const [state, dispatch] = useMemo(
    () => [reducerState, reducerDispatch],
    [reducerState],
  );

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
