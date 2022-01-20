import { createContext, Resource, JSX, createResource, useContext, Setter } from "solid-js";
import { fetchResults, Result, Results } from "../api/results";

type FetchResultsResult = Results | undefined | null

interface FetchResultsStore {
    results: Resource<FetchResultsResult>;
    mutate: Setter<FetchResultsResult>;
    refetch: () => void;
}

const FetchResultsContext = createContext<FetchResultsStore>();

interface FetchResultsProps {
    children: JSX.Element | JSX.Element[];
}

export function FetchResultsProvider(props: FetchResultsProps): JSX.Element {
    const [results, {mutate, refetch}] = createResource(fetchResults)
    const store: FetchResultsStore = {
        results,
        mutate, 
        refetch
    }

    return (
        <FetchResultsContext.Provider value={store}>
            {props.children}
        </FetchResultsContext.Provider>
    )
} 

export function useFetchResults(): Resource<FetchResultsResult> {
    return useContext(FetchResultsContext)?.results;
}