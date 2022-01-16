import { Component, createEffect, For, JSX, lazy } from 'solid-js';
import { createRouterTree, Router } from 'solid-tiny-router';
import ResultCard from './components/ResultCard';
import { useFetchResults } from './models/FetchResults';
import { TestContext } from './models/testContext';

const routes = createRouterTree([
  {
    path: '/',
    component: lazy(() => import('./pages'))
  },
  {
    path: '/results/[id]',
    component: lazy(() => import('./pages/[id]'))
  }
])

export function App(): JSX.Element{
  const result = useFetchResults();
  createEffect(() => {
    console.log(result())
  })
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
<TestContext.Provider value={'hello'}>
    <div class="container">
      <Router routes={routes} />
    </div>
</TestContext.Provider>
  );
};

export default App;
