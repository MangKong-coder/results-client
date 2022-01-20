import { Accessor, createContext, createResource, createSignal, JSX, useContext, Setter, Resource } from "solid-js";

import { Result, fetchResult } from '../api/results'

type FetchResultResult = Result | undefined | null

interface FetchResultStore {
  result: Resource<FetchResultResult>;
  mutate: Setter<FetchResultResult>;
  refetch: () => void
}

const FetchResultContext = createContext<FetchResultStore>();

interface FetchResultProviderProps {
  children: JSX.Element | JSX.Element[];
  id: string;
}

export function FetchResultProvider(props: FetchResultProviderProps) {
  const [result, { mutate, refetch }] = createResource(props.id, fetchResult),
    store: FetchResultStore = {
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

export function useFetchResults(): Resource<FetchResultResult> {
  return useContext(FetchResultContext)?.result
}

export function mutateFetchResults(): Setter<FetchResultResult> {
  return useContext(FetchResultContext)?.mutate
}
