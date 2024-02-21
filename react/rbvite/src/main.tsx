import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Sample from './components/Sample.tsx';
import { CounterProvider } from './contexts/counter-context.tsx';
import { SessionProvider } from './contexts/session-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
      <SessionProvider>
        <App />
      </SessionProvider>
    </CounterProvider>
    <Sample />
  </React.StrictMode>
);
