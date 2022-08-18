import { FeaturedRelease } from '@/components/Release/featured';
import { RailsCollectionResponse, Release } from '@/types/Data';
import { assertUnreachable } from '@/util/unreachable';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from 'react';

type FetchType = 'releases' | 'releases';

export type ReleaseAction =
  | { type: 'error'; fetchType: FetchType; message: string }
  | { type: 'start'; fetchType: FetchType; isFetching: boolean }
  | { type: 'done'; fetchType: FetchType };

interface ReleaseState {
  releases?: RailsCollectionResponse<Release>;
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

function appReducer(prevState: ReleaseState, action: ReleaseAction) {
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

interface ReleaseWrapper {
  releases: RailsCollectionResponse<Release>;
}

export function ReleaseWrapper(props: PropsWithChildren<ReleaseWrapper>) {
  const { children, releases } = props;
  const [reducerState, reducerDispatch] = useReducer(appReducer, {
    ...initialState,
    releases,
  });

  console.log(`props.releases`, props.releases);

  // memoize store
  const [state, dispatch] = useMemo(
    () => [reducerState, reducerDispatch],
    [reducerState],
  );

  console.log(`reducerState`, reducerState);

  return (
    <ReleaseContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
      <div className="grid grid-cols-2 gap-2">
        {/* move to render prop
         */}
        {releases?.items?.map((release) => (
          <FeaturedRelease {...release} key={release.id} />
        ))}
      </div>
    </ReleaseContext.Provider>
  );
}
