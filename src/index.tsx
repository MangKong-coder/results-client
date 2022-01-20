import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { FetchResultProvider } from './models/FetchResults';
import getResultNumber from './util/getResultNumber';

render(() =>
  <FetchResultProvider id={getResultNumber()}><App /></FetchResultProvider>, document.getElementById('root') as HTMLElement);
