import { Component, For, JSX, lazy } from 'solid-js';
import { createRouterTree, Router } from 'solid-tiny-router';
import ResultCard from './components/ResultCard';
import { useFetchResults } from './models/FetchResults';

const routes = createRouterTree([
  {
    path: '/',
    component: lazy(() => import('./pages'))
  },
  {
    path: 'result/[id]',
    component: lazy(() => import('./pages/[id]'))
  }
])

export function App(): JSX.Element{
  const result = useFetchResults();
  console.log(result())
  return (
    // <div class="container mx-auto text-center">
    //   <h1>Results</h1>
    //   <ul>
    //     {/* <For each={result()}>
    //       {
    //         (result) =>    <ResultCard />
    //       }
    //     </For> */}
    //     <ResultCard />

    //   </ul>


    // </div>

    <div>
      <Router routes={routes} />
    </div>
  );
};

export default App;
