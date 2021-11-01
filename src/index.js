import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import './index.css';

import { App } from './App';

// STEP 1 - import React Router's Router
// Wrap the app in the provider

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
