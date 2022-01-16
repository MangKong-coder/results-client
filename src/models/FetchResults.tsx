import { Accessor, createContext, createResource, createSignal, JSX, useContext, Setter, Resource } from "solid-js";

import { Result, fetchResult } from '../api/results'

interface FetchResultStore {
  result: Accessor<Result>;
  mutate: Setter<Result>;
  refetch: () => void
}

const FetchResultsContext = createContext<FetchResultStore>();

interface FetchResultProviderProps {
  children: JSX.Element | JSX.Element[];
  id: string;
}

// const INITIAL_STATE: Result =
//     {
//       "_id": "61b528407740415e0fab4e50",
//       "test": "Antigen test",
//       "accessionNumber": "123456789",
//       "fullName": "Grape Doe",
//       "dateOfCollection": "2021-12-12T00:00:00.000Z",
//       "dateOfRelease": "2021-12-12T00:00:00.000Z",
//       "output": "negative",
//       "_v": 0
//     }



export function FetchResultProvider(props: FetchResultProviderProps) {
  const [result, { mutate, refetch }] = createResource(props.id, fetchResult),
    store: FetchResultStore = {
      result,
      mutate,
      refetch
    }

  // const [result, setResults] = createSignal<Result>(INITIAL_STATE),
  // store: FetchResultStore = {
  //   result: result,
  //   mutate: setResults
  // }

  return (
    <FetchResultsContext.Provider value={store}>
      {props.children}
    </FetchResultsContext.Provider>
  )
}

export function useFetchResults(): Accessor<Result> {
  return useContext(FetchResultsContext)?.result
}
