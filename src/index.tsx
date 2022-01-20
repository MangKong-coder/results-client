import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { FetchResultByIdProvider } from './models/FetchResultById';
import getResultNumber from './util/getResultNumber';
import { FetchResultsProvider } from './models/FetchResults';

render(() =>
  <FetchResultByIdProvider id={getResultNumber()}>
    <FetchResultsProvider>
      <App />
    </FetchResultsProvider>
  </FetchResultByIdProvider>,
 document.getElementById('root') as HTMLElement);
