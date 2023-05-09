import React from 'react';

import { AuthProvider } from '@providers/AuthProvider';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Root } from './Root';

import './styles/index.css';
import '@configs/amplify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Index = () => (
  <BrowserRouter>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </BrowserRouter>
);

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
);
