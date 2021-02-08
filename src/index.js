import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { Provider } from 'react-redux'

import "./sass/main.scss";
import App from "./views/App";

import reportWebVitals from "./reportWebVitals";
import Store from './store'

ReactDOM.render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
