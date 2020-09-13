import React from "react";
import { HelmetProvider } from "react-helmet-async";

import "./../i18n";

import { Public } from './Public';
import { Private } from './Private';

const App = () => {
  const autentication = true;
  return (
    <div className="App">
      <HelmetProvider>
        {autentication ? <Private /> : <Public />}
      </HelmetProvider>
    </div>
  );
};

export default App;
