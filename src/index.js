import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './App';
// STEP 1 - a) import React Router's Router

// b) Wrap the app in the provider
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
