import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

import App from './App.js';
import './index.scss';

import { CartStateContextProvider } from './contexts/cart-dropdown-context.jsx';
import { store, persistor } from './store/store.js';
import { stripePromise } from './utils/stripe/stripe.utils';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <CartStateContextProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartStateContextProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
