import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import './index.scss';
import { UserContextProvider } from './contexts/userContext.jsx';
import { ShopProductsContextProvider } from './contexts/shopProductsContext.jsx';
import { CartStateContextProvider } from './contexts/cart-dropdown-context.jsx';
import { AddItemToCartContextProvider } from './contexts/add-cart-item-context.jsx';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ShopProductsContextProvider>
          <AddItemToCartContextProvider>
            <CartStateContextProvider>
              <App />
            </CartStateContextProvider>
          </AddItemToCartContextProvider>
        </ShopProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
