import { For, JSX, Show } from "solid-js"
import { useFetchResults } from "../models/FetchResults"
import composeClassnames from "../util/composeClassnames"


function ResultCard(): JSX.Element {
  const {result} = useFetchResults()
  return (
    <For each={result()}>
      {(result) => <div class="border rounded-lg  mt-2 max-w-lg">
      <div class="bg-teal-500 py-9 text-3xl text-white font-bold rounded-t-lg">
        <h1>{result.test}</h1>
      </div>
      <div class="container mx-auto p-7 bg-teal-100">
        <div class="flex space-x-1 text-lg font-semibold">
          <h2>Name:</h2>
          <h2>{result.fullName}</h2>
        </div>
        <div class="flex space-x-1 text-lg font-semibold">
          <h2>Accession Number:</h2>
          <h2>{result.accessionNumber}</h2>
        </div>
        <div class="flex space-x-1 text-lg font-semibold">
          <h2>Date of Collection:</h2>
          <h2>{result.dateOfCollection}</h2>
        </div>
        <div class="flex space-x-1 text-lg font-semibold">
          <h2>Date of Result:</h2>
          <h2>{result.dateOfRelease}</h2>
        </div>
        <div class={composeClassnames('font-bold text-4xl my-9', result.result == 'positive' ? 'text-red-500': 'text-green-500')}>
          <h1>{result.result.toUpperCase()}</h1>
        </div>
      </div>
    </div>}
    </For>
    

  )
}

export default ResultCard