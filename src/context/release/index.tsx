import { RailsCollectionResponse, Release } from '@/types/Data';
import { assertUnreachable } from '@/util/unreachable';
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

type FetchType = 'release' | 'releases';

export type ReleaseAction =
  | { type: 'error'; fetchType: FetchType; message: string }
  | { type: 'start'; fetchType: FetchType; isFetching: boolean }
  | { type: 'successEditOrCreate'; fetchType: FetchType; data: Release }
  | { type: 'done'; fetchType: FetchType };

interface ReleaseState {
  releases?: RailsCollectionResponse<Release>;
  release?: Release;
  fetching: Map<FetchType, boolean>;
  errors: Map<FetchType, string | undefined>;
}

interface AppContext {
  state: ReleaseState;
  dispatch: Dispatch<ReleaseAction>;
}

const initialState = {
  fetching: new Map([
    [`release` as FetchType, false],
    [`releases` as FetchType, false],
  ]),
  errors: new Map([
    [`release` as FetchType, undefined],
    [`releases` as FetchType, undefined],
  ]),
  releases: undefined,
};

function releaseReducer(prevState: ReleaseState, action: ReleaseAction) {
  switch (action.type) {
    case `start`: {
      return {
        ...prevState,
        errors: prevState.errors.set(action.fetchType, undefined),
        fetching: prevState.fetching.set(action.fetchType, action.isFetching),
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
        fetching: prevState.fetching.set(action.fetchType, false),
      };
    }
    case `successEditOrCreate`: {
      return {
        ...prevState,
        fetching: prevState.fetching.set(action.fetchType, false),
        release: {
          ...prevState.release,
          ...action.data,
        },
      };
    }

    default: {
      return assertUnreachable(action);
    }
  }
}

const ReleaseContext = createContext<AppContext>({
  state: initialState,
  dispatch: () => {
    return;
  },
});

export const useReleaseContext = () => useContext(ReleaseContext);

interface ReleaseWrapperChildren {
  releases?: RailsCollectionResponse<Release>;
  release?: Release;
}

interface ReleaseWrapper {
  releases?: RailsCollectionResponse<Release>;
  release?: Release;
  children: (props: ReleaseWrapperChildren) => ReactNode;
}

export function ReleaseWrapper(props: ReleaseWrapper) {
  const { children, releases, release } = props;
  const [reducerState, reducerDispatch] = useReducer(releaseReducer, {
    ...initialState,
    releases,
    release,
  });

  const [state, dispatch] = useMemo(
    () => [reducerState, reducerDispatch],
    [reducerState],
  );

  return (
    <ReleaseContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children({ releases, release })}
    </ReleaseContext.Provider>
  );
}
