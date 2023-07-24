import { useState, createContext } from "react";
import initialData from "../data.json";

export const DashContext = createContext();

export function DashProvider({ children }) {
  // pull sample data from data.json and set initial state
  const [dashData, setDashData] = useState(initialData);

  return (
    <DashContext.Provider value={dashData}>{children}</DashContext.Provider>
  );
}
