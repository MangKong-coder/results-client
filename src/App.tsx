import { Component, For } from 'solid-js';
import ResultCard from './components/ResultCard';
import { useFetchResults } from './models/FetchResults';

const App: Component = () => {
  const { result } = useFetchResults();
  console.log(result())
  return (
    <div class="container mx-auto text-center">
      <h1>Results</h1>
      <ul>
        <For each={result()}>
          {
            (result) =>    <ResultCard />
          }
        </For>

      </ul>
   

    </div>

  );
};

export default App;
