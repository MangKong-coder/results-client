import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { FetchResultProvider } from './models/FetchResults';
import getResultId from './util/getResultId';

render(() =>
  <FetchResultProvider id={getResultId()}><App /></FetchResultProvider>, document.getElementById('root') as HTMLElement);
