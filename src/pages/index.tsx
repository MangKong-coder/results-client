// ANCHOR SOLID IMPORTS 
import { JSX } from "solid-js"
import ResultList from "../components/ResultList"

// ANCHOR IMAGES
import WelcomeSVG from '../images/welcome.svg'

export default function main(): JSX.Element {
  return (
    <div class="container mx-auto">
      <div class=" text-purple-500 text-center p-10 space-y-10">
        <h1 class="text-2xl md:text-7xl">This is the Results Client</h1>
        <img src={WelcomeSVG} alt="Welcome" class="w-96 mx-auto" />
      </div>
    </div>
  )
}