import { format } from "date-fns"
import { HiSolidCheckCircle, HiSolidXCircle } from "solid-icons/hi"
import { JSX, Show } from "solid-js"
import { useFetchResults } from "../models/FetchResults"
import composeClassnames from "../util/composeClassnames"


function ResultCard(): JSX.Element {
  const result = useFetchResults()
  return (
    <Show when={result()?.result}>
      {(value) => (<div class="text-center w-screen">
      <div class="bg-purple-500 py-10 text-4xl md:py-20 md:text-5xl text-white font-bold">
        <h1>{value.test}</h1>
      </div>
      <div class="container mx-auto p-2 text-lg md:px-32 md:py-7 md:text-2xl ">
        <div class="flex space-x-1 font-semibold">
          <h2>Name:</h2>
          <h2>{value.fullName}</h2>
        </div>
        <div class="flex space-x-1  font-semibold">
          <h2>Accession Number:</h2>
          <h2>{value.accessionNumber}</h2>
        </div>
        <div class="flex space-x-1 font-semibold">
          <h2>Date of Collection:</h2>
          <h2>{value.dateOfCollection}</h2>
        </div>
        <div class="flex space-x-1 font-semibold">
          <h2>Date of Result:</h2>
          <h2>{value.dateOfRelease}</h2>
        </div>
        <div class={composeClassnames('font-bold text-5xl md:text-6xl mt-9', value.output?.toLowerCase() == 'positive' ? 'text-red-500' : 'text-green-500')}>
        <Show when={value.output?.toLowerCase() == 'positive'} fallback={<span class="flex justify-center items-start"><h1>{value.output?.toUpperCase()}</h1> <HiSolidCheckCircle /></span>}>
          <span class="flex justify-center items-start">
            <h1>{value.output?.toUpperCase()}</h1> <HiSolidXCircle class="text-5xl" />
          </span>
        </Show>
        </div>
      </div>
    </div>)}
    </Show>
  )
}

export default ResultCard