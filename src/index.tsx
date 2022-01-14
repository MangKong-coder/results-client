import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { FetchResultsProvider } from './models/FetchResults';

render(() =>
  <FetchResultsProvider><App /></FetchResultsProvider>, document.getElementById('root') as HTMLElement);
