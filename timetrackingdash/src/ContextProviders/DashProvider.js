import { useState, createContext } from "react";
import initialData from "../data.json";

export const DashContext = createContext();
export const timeFrameContext = createContext();

export function DashProvider({ children }) {
  // pull sample data from data.json and set initial state
  const [dashData, setDashData] = useState(initialData);
  const [timeFrame, setTimeFrame] = useState("daily");

  const changeTimeFrame = (timeFrameName) => {
    return setTimeFrame(timeFrameName);
  };

  return (
    <DashContext.Provider value={dashData}>
      <timeFrameContext.Provider
        value={{ timeFrame: timeFrame, setTimeFrame: changeTimeFrame }}
      >
        {children}
      </timeFrameContext.Provider>
    </DashContext.Provider>
  );
}
