import { Accessor, createContext, createResource, createSignal, JSX, useContext, Setter, Resource } from "solid-js";

import { Result, fetchResult } from '../api/results'

type FetchResultByIdResult = Result | undefined | null

interface FetchResultByIdStore {
  result: Resource<FetchResultByIdResult>;
  mutate: Setter<FetchResultByIdResult>;
  refetch: () => void
}

const FetchResultContext = createContext<FetchResultByIdStore>();

interface FetchResultByIdProviderProps {
  children: JSX.Element | JSX.Element[];
  id: string;
}

export function FetchResultByIdProvider(props: FetchResultByIdProviderProps) {
  const [result, { mutate, refetch }] = createResource(props.id, fetchResult),
    store: FetchResultByIdStore = {
      result,
      mutate,
      refetch
    }

  return (
    <FetchResultContext.Provider value={store}>
      {props.children}
    </FetchResultContext.Provider>
  )
}

export function useFetchResultById(): Resource<FetchResultByIdResult> {
  return useContext(FetchResultContext)?.result
}

export function mutateFetchResult(): Setter<FetchResultByIdResult> {
  return useContext(FetchResultContext)?.mutate
}
