import React, { useContext } from "react";
import { timeFrameContext } from "../../ContextProviders/DashProvider";
export const PersonalCard = () => {
  const timeFrameData = useContext(timeFrameContext);
  const changeTimeFrame = timeFrameData.setTimeFrame;

  return (
    <div style={{ gridArea: "Personal" }}>
      PersonalCard
      <button onClick={() => changeTimeFrame("daily")}> Daily </button>
      <button onClick={() => changeTimeFrame("weekly")}> Weekly </button>
      <button onClick={() => changeTimeFrame("monthly")}> Monthly </button>
    </div>
  );
};
