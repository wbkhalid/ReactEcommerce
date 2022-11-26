import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilterContextProvider } from './context/filterContext';
import { AppProvider } from './context/productcontext';
import { CartProvider } from './context/cartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-ri3eokvab35xzqqj.us.auth0.com"
    clientId="Rs0mGOm5iUcq2xhH3T93PkVIjKzST3G5"
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
