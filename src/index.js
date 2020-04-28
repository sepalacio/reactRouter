import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createHistory()

ReactDOM.render(
  <Router history={ history }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>, document.getElementById('root')
);

serviceWorker.unregister();
