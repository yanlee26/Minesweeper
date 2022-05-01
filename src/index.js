import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App'
import { ErrorBoundary } from './errorBoundary'

// const container = document.querySelector('#root')
// const root = createRoot(container);

// root.render(
// <ErrorBoundary>
//     <App/>
// </ErrorBoundary>)

ReactDOM.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
    document.getElementById('root')
  );