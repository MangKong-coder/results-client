import { HiSolidCheck, HiSolidCheckCircle, HiSolidX, HiSolidXCircle } from "solid-icons/hi"
import { For, JSX, Show } from "solid-js"
import { useFetchResults } from "../models/FetchResults"
import composeClassnames from "../util/composeClassnames"


function ResultCard(): JSX.Element {
  const result = useFetchResults()
  return (
    <div class="text-center w-screen">
      <div class="bg-purple-500 py-10 text-4xl md:py-20 md:text-5xl text-white font-bold">
        <h1>{result().test}</h1>
      </div>
      <div class="container mx-auto p-2 text-lg md:px-32 md:py-7 md:text-2xl ">
        <div class="flex space-x-1 font-semibold">
          <h2>Name:</h2>
          <h2>{result().fullName}</h2>
        </div>
        <div class="flex space-x-1  font-semibold">
          <h2>Accession Number:</h2>
          <h2>{result().accessionNumber}</h2>
        </div>
        <div class="flex space-x-1 font-semibold">
          <h2>Date of Collection:</h2>
          <h2>{result().dateOfCollection.split('T')[0]}</h2>
        </div>
        <div class="flex space-x-1 font-semibold">
          <h2>Date of Result:</h2>
          <h2>{result().dateOfRelease.split('T')[0]}</h2>
        </div>
        <div class={composeClassnames('font-bold text-5xl md:text-6xl mt-9', result().output.toLowerCase() == 'positive' ? 'text-red-500' : 'text-green-500')}>
        <Show when={result().output.toLowerCase() == 'positive'} fallback={<span class="flex justify-center items-start"><h1>{result().output.toUpperCase()}</h1> <HiSolidCheckCircle /></span>}>
          <span class="flex justify-center items-start">
            <h1>{result().output.toUpperCase()}</h1> <HiSolidXCircle class="text-5xl" />
          </span>
        </Show>
          
        </div>
        
      </div>
    </div>


  )
}

export default ResultCard