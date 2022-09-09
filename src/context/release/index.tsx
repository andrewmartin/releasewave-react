import { RailsCollectionResponse, Release, Review } from '@/types/Data';
import { assertUnreachable } from '@/util/unreachable';
import { release } from 'os';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from 'react';

export type FetchType = 'release' | 'releases' | 'review';

export type ReleaseAction =
  | { type: 'error'; fetchType: FetchType; message: string }
  | { type: 'start'; fetchType: FetchType; isFetching: boolean }
  | { type: 'successEditOrCreate'; fetchType: FetchType; data: Release }
  | { type: 'successCreateReview'; fetchType: FetchType; data: Review }
  | { type: 'successEditReview'; fetchType: FetchType; data: Review }
  | { type: 'successDeleteReview'; fetchType: FetchType; data: Review }
  | { type: 'done'; fetchType: FetchType }
  | {
      type: 'successGetReleases';
      fetchType: FetchType;
      data?: RailsCollectionResponse<Release>;
    }
  | {
      type: 'setEditingReview';
      review: Review;
    };

interface ReleaseState {
  releases?: RailsCollectionResponse<Release>;
  reviews?: RailsCollectionResponse<Review>;
  review?: Review;
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
  review: undefined,
};

function releaseReducer(
  prevState: ReleaseState,
  action: ReleaseAction,
): ReleaseState {
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
    case `setEditingReview`: {
      return {
        ...prevState,
        review: action.review,
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
    case `successCreateReview`: {
      return {
        ...prevState,
        fetching: prevState.fetching.set(action.fetchType, false),
        reviews: {
          ...prevState.reviews,
          per_page: prevState.reviews?.per_page || 10,
          current_page: prevState.reviews?.current_page || 1,
          total_entries: prevState.reviews?.total_entries || 1,
          items: prevState.reviews?.items
            ? prevState.reviews?.items.concat(action.data)
            : [action.data],
        },
      };
    }
    case `successEditReview`: {
      const buildItems = () => {
        if (prevState.reviews?.items?.length) {
          const previousItems = prevState.reviews.items
            .concat()
            .filter((item) => {
              return item.id !== action.data.id;
            });
          previousItems.unshift(action.data);

          return previousItems;
        }

        return [];
      };
      const items = buildItems();

      return {
        ...prevState,
        fetching: prevState.fetching.set(action.fetchType, false),
        review: undefined,
        reviews: {
          ...prevState.reviews,
          per_page: prevState.reviews?.per_page || 10,
          current_page: prevState.reviews?.current_page || 1,
          total_entries: prevState.reviews?.total_entries || 1,
          items,
        },
      };
    }
    case `successDeleteReview`: {
      return {
        ...prevState,
        fetching: prevState.fetching.set(action.fetchType, false),
        reviews: {
          ...prevState.reviews,
          per_page: prevState.reviews?.per_page || 10,
          current_page: prevState.reviews?.current_page || 1,
          total_entries: prevState.reviews?.total_entries || 1,
          items: prevState.reviews?.items
            ? prevState.reviews?.items
                .concat()
                .filter((r) => r.id !== action.data.id)
            : [action.data],
        },
      };
    }

    case `successGetReleases`: {
      if (action.data) {
        return {
          ...prevState,
          fetching: prevState.fetching.set(action.fetchType, false),
          releases: {
            ...prevState.releases,
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

const ReleaseContext = createContext<AppContext>({
  state: initialState,
  dispatch: () => {
    return;
  },
});

export const useReleaseContext = () => useContext(ReleaseContext);

interface ReleaseWrapper extends PropsWithChildren {
  releases?: RailsCollectionResponse<Release>;
  reviews?: RailsCollectionResponse<Review>;
  release?: Release;
  review?: Review;
}

export function ReleaseContextContainer(props: ReleaseWrapper) {
  const { children, releases, release, reviews } = props;
  const [reducerState, reducerDispatch] = useReducer(releaseReducer, {
    ...initialState,
    releases,
    release,
    reviews,
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
      {children}
    </ReleaseContext.Provider>
  );
}
