// ANCHOR SOLID IMPORTS
import { setDate } from "date-fns";
import { HiSolidArrowCircleLeft, HiSolidArrowCircleRight } from "solid-icons/hi";
import { createEffect, createSignal, For, JSX } from "solid-js";

// ANCHOR MODEL
import { useFetchResults } from "../models/FetchResults";

export interface ResultFormProps {
    isEdit?: false 
}

type TEST_TYPE = 'ANTIBODY TEST' | 'ANTIGEN TEST'

const TESTS: TEST_TYPE[] = [
  'ANTIBODY TEST',
  'ANTIGEN TEST'
]


const INITIAL_TEST_TYPE: TEST_TYPE = 'ANTIBODY TEST'

const INITIAL_DATE = new Date().toISOString()

export function CreateResultForm(props: ResultFormProps): JSX.Element {
  const [tests, setTests] = createSignal(INITIAL_TEST_TYPE)
  const [name, setName] = createSignal('')
  const [accesion, setAccession] = createSignal('')
  const [dateofCollection, setDateOfCollection] = createSignal(INITIAL_DATE)
  const [dateofRelease, setDateOfRelease] = createSignal(INITIAL_DATE)

  function submit(): void {
    
  }
  
    return (
      <>
        <div class="bg-purple-500 py-10 text-4xl md:py-20 md:text-5xl text-white font-bold text-center">
        <h1>Create Result</h1>
        </div>
        <div class="container mx-auto w-2/5">
          <form class="p-6">
          <div>
            <label htmlFor="location" class="block text-sm font-medium text-gray-700">
              Type of Test
            </label>
                <select 
                  required
                  id="test"
                  name="test"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                  value={tests()}
                  onInput={(e) => setTests(e.currentTarget.value)}
                >
                <For each={TESTS}>
                  {(test) => (
                    <option value={test}>{test}</option>
                  )}
                </For>
                </select>
          </div>

          <div>
            <label htmlFor="text" class="block text-sm font-medium text-gray-700">
              Accession Number
            </label>
            <div class="mt-1">
              <input
                required
                type="text"
                name="text"
                id="text"
                class="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="1234ABCDEFG"
                value={accesion()}
                onInput={(e) => setAccession(e.currentTarget.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="text" class="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div class="mt-1">
              <input
                required
                type="text"
                name="text"
                id="text"
                class="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="John Doe"
                value={name()}
                onInput={e => setName(e.currentTarget.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="dateOfCollection" class="block text-sm font-medium text-gray-700">
              Date Of Collection
            </label>
            <div class="mt-1">
              <input
                required
                type="datetime-local"
                name="dateOfCollection"
                id="dateOfCollection"
                class="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={dateofCollection()}
                onInput={e => setDateOfCollection(e.currentTarget.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="dateOfRelease" class="block text-sm font-medium text-gray-700">
              Date Of Release
            </label>
            <div class="mt-1">
              <input
                required
                type="datetime-local"
                name="dateOfRelease"
                id="dateOfRelease"
                class="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={dateofRelease()}
                onInput={e => setDateOfRelease(e.currentTarget.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex mt-2 text-center justify-center items-center text-lg px-6 py-3 border border-transparent shadow-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 w-full"
          >
            Submit
            <HiSolidArrowCircleRight />
          </button>
          </form>
        </div>
      </>

      
    )
}