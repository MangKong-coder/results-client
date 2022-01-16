import { JSX, useContext } from "solid-js";
import { RouterParams, useRouter } from "solid-tiny-router";
import ResultCard from "../components/ResultCard";
import { TestContext } from '../models/testContext'

interface Param extends RouterParams {
  id: string
}
export default function Result(): JSX.Element {
  console.log(useContext(TestContext))
  const router = useRouter<Param>()
  return (
    <>
      <ResultCard />
    </>
  )
}

