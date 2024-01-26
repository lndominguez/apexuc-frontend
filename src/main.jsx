import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
      <GoogleOAuthProvider clientId="75908156014-s6veqs45q2s6p7t6jbh6nisjdomfro4p.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
