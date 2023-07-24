import React, { useState } from "react";

import { DashProvider } from "./ContextProviders/DashProvider";
import { Dash } from "./components/Dash/Dash";

function App() {
  return (
    <DashProvider>
      <Dash />
    </DashProvider>
  );
}

export default App;
