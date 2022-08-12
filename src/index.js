import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import './index.scss';

import { CartStateContextProvider } from './contexts/cart-dropdown-context.jsx';
import { store } from './store/store.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartStateContextProvider>
          <App />
        </CartStateContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
