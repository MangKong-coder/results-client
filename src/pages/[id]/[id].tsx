import { JSX, useContext } from "solid-js";
import { RouterParams, useRouter } from "solid-tiny-router";
import ResultCard from "../../components/ResultCard";

interface Param extends RouterParams {
  id: string
}
export default function Result(): JSX.Element {
  const router = useRouter<Param>()
  return (
    <>
      <ResultCard />
    </>
  )
}

