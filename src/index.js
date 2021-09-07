import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
  <Auth0Provider
    domain="dev-1ofnhtfv.us.auth0.com"
    clientId="k4kxz4IEjhixX0vs7gbIf4qFOSC3Knua"
    redirectUri={process.env.REACT_APP_BASE_URL}
  >
  <App />
    </Auth0Provider>,
  document.getElementById("root")
);