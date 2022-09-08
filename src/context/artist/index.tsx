import { RailsCollectionResponse, Artist, Review } from '@/types/Data';
import { assertUnreachable } from '@/util/unreachable';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from 'react';

export type FetchType = 'artist' | 'artists' | 'review';

export type ArtistAction =
  | { type: 'error'; fetchType: FetchType; message: string }
  | { type: 'start'; fetchType: FetchType; isFetching: boolean }
  | { type: 'successEditOrCreate'; fetchType: FetchType; data: Artist }
  | { type: 'done'; fetchType: FetchType }
  | {
      type: 'successGetArtists';
      fetchType: FetchType;
      data?: RailsCollectionResponse<Artist>;
    };

interface ArtistState {
  artists?: RailsCollectionResponse<Artist>;
  artist?: Artist;
  fetching: Map<FetchType, boolean>;
  errors: Map<FetchType, string | undefined>;
}

interface AppContext {
  state: ArtistState;
  dispatch: Dispatch<ArtistAction>;
}

const initialState = {
  fetching: new Map([
    [`artist` as FetchType, false],
    [`artists` as FetchType, false],
  ]),
  errors: new Map([
    [`artist` as FetchType, undefined],
    [`artists` as FetchType, undefined],
  ]),
  artists: undefined,
};

function artistReducer(
  prevState: ArtistState,
  action: ArtistAction,
): ArtistState {
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
        artist: {
          ...prevState.artist,
          ...action.data,
        },
      };
    }

    case `successGetArtists`: {
      if (action.data) {
        return {
          ...prevState,
          fetching: prevState.fetching.set(action.fetchType, false),
          artists: {
            ...prevState.artists,
            ...action.data,
          },
        };
      }
      return prevState;
    }

    default: {
      return assertUnreachable(action);
    }
  }
}

const ArtistContext = createContext<AppContext>({
  state: initialState,
  dispatch: () => {
    return;
  },
});

export const useArtistContext = () => useContext(ArtistContext);

interface ArtistWrapper extends PropsWithChildren {
  artists?: RailsCollectionResponse<Artist>;
  reviews?: RailsCollectionResponse<Review>;
  artist?: Artist;
}

export function ArtistContextContainer(props: ArtistWrapper) {
  const { children, artists, artist } = props;
  const [reducerState, reducerDispatch] = useReducer(artistReducer, {
    ...initialState,
    artists,
    artist,
  });

  const [state, dispatch] = useMemo(
    () => [reducerState, reducerDispatch],
    [reducerState],
  );

  return (
    <ArtistContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
}
