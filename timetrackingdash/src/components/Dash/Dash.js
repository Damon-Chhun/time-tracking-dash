import React, { useContext } from "react";
import {
  DashContext,
  timeFrameContext,
} from "../../ContextProviders/DashProvider";
import { Card } from "../Card/Card";
import { StyledWrapper, StyledPersonal } from "./Dash.styled";
import { PersonalCard } from "../PersonalCard/PersonalCard";

export const Dash = () => {
  const dashData = useContext(DashContext);
  const timeFrameData = useContext(timeFrameContext);
  console.log(dashData);
  return (
    <StyledWrapper>
      <PersonalCard />
      {dashData.map((ele) => (
        <Card data={ele} timeFrame={timeFrameData.timeFrame} />
      ))}
    </StyledWrapper>
  );
};
