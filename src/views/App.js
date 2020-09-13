import React from "react";
import { HelmetProvider } from "react-helmet-async";

import "./../i18n";

const App = () => {
  return (
    <div className="App">
      <HelmetProvider>
        app
      </HelmetProvider>
    </div>
  );
};

export default App;
