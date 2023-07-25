import React, { useState } from "react";
import "./App.css";

import { DashProvider } from "./ContextProviders/DashProvider";
import { Dash } from "./components/Dash/Dash";

function App() {
  return (
    <DashProvider>
      <div className="App">
        <Dash />
      </div>
    </DashProvider>
  );
}

export default App;
