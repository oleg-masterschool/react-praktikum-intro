import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './App';

// usually once per app
ReactDOM.render(
  <React.StrictMode>
    <App beginner={true} instructor="Sensei" course="React Fundamentals" cohort={0}/>
  </React.StrictMode>,
  document.getElementById('root')
);
