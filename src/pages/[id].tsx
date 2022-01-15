import { JSX } from "solid-js";
import { RouterParams, useRouter } from "solid-tiny-router";
import ResultCard from "../components/ResultCard";

interface Param extends RouterParams {
  id: string
}
export default function Result(): JSX.Element {
  const router = useRouter<Param>()
  return (
    <>
      <h1>hello ${router.params.id}</h1>
      <ResultCard />
    </>
  )
}