import React, { useState } from "react";

import { ThemeBox } from "./components/ThemeBox/ThemeBox";

import { ThemeProvider } from "./ContextProviders/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeBox />
      </div>
    </ThemeProvider>
  );
}

export default App;
