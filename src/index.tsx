import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import {Utils} from "./utils/Utils";
// import reportWebVitals from './reportWebVitals';
const authConfig = Utils.getAuthConfiguration();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // TODO auth abstraction
    <Auth0Provider
        domain={ authConfig.domain }
        clientId={ authConfig.clientId }
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>,
);

// reportWebVitals();
