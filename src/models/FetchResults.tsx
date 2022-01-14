import { Accessor, createContext, createResource, createSignal, JSX, useContext } from "solid-js";

import { Result, fetchResults } from '../api/results'

interface FetchResultsStore {
  result: Accessor<Result[]>;
  mutate: Accessor<Result[]>;
}

export const FetchResultsContext = createContext<FetchResultsStore>();

interface FetchResultsProviderProps {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: Result[] = [
  {
    _id: "123456dadf",
    test: "Antigen Test",
    fullName: "Edward Darby",
    accessionNumber: "ADKDAKH123553",
    dateOfCollection: "1-22-22",
    dateOfRelease: "1-22-22",
    result: "NEGATIVE"
  }
]

export function FetchResultsProvider(props: FetchResultsProviderProps) {
  // const [result] = createResource(null ,fetchResults),
  //   store: FetchResultsStore = {
  //     result: result
  //   }

  const [result, setResults] = createSignal<Result[]>(INITIAL_STATE),
  store: FetchResultsStore = {
    result: result,
    mutate: setResults
  }

  return (
    <FetchResultsContext.Provider value={store}>
      {props.children}
    </FetchResultsContext.Provider>
  )
}

export function useFetchResults(): FetchResultsStore {
  return useContext(FetchResultsContext)
}
