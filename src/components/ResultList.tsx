import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import parseISO from "date-fns/parseISO";
import { HiSolidX } from "solid-icons/hi";
import { createEffect, For, JSX, Show } from "solid-js";
import { Link, useRouter } from "solid-tiny-router";
import { deleteResult } from "../api/results";
import { useFetchResults } from "../models/FetchResults";
import BlankSlateSVG from '../images/blank-slate.svg';

export default function ResultList(): JSX.Element {
    const results = useFetchResults();
    if (!results) {
        return null
    }
    createEffect(() => {
        console.log(results())
    })
    return (
        <div class="">
            <div class="bg-purple-500 py-10 text-4xl md:py-20 md:text-5xl text-white font-bold text-center">
                <h1>Results</h1>
            </div>
            <div class=" w-3/5 mx-auto mt-4 md:mt-2">
                <ul class="space-y-2 divide-y divide-gray-400">
                    <For each={results()?.result} fallback={
                    <div class="text-center">
                    <h2 class="text-center text-5xl font-bold">No Results</h2>
                    <img class="mx-auto w-1/2" src={BlankSlateSVG} alt="blank"/> 
                    <Link href="/results/create" class="text-xl text-purple-500 underline underline-offset-1">Create here</Link>
                    </div>}>
                        {(item) => (
                            <li class="gap-4 p-3">
                                <div class="flex flex-row items-center ">
                                    <a href={`/results/${item.accessionNumber}`}>
                                        <h2 class="text-purple-500  text-md font-semibold">
                                            Accession Number: <span class="underline">{item.accessionNumber}</span>
                                        </h2>
                                    </a>
                                    <button onClick={async () => {await deleteResult(item._id); useRouter().reload}}>
                                        <HiSolidX 
                                            class="text-red-500 cursor-pointer" 
                                        />
                                    </button>
                                </div>
                                <span class="text-gray-400 text-sm ml-3 font-semibold">
                                    {formatDistanceToNowStrict(parseISO(item.createdAt), {addSuffix: true})}
                                </span>
                            </li>
                        )}
                    </For>
                </ul>
            </div>
        </div>
    )
}