import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import "./sass/main.scss";
import { Loading } from "./components/Loading";
import reportWebVitals from './reportWebVitals';

const App = lazy(() => import("./views/App"));

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
