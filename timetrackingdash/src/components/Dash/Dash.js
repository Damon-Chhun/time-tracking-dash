import React, { useContext } from "react";
import { DashContext } from "../../ContextProviders/DashProvider";
import { Card } from "../Card/Card";
import { StyledWrapper, StyledPersonal } from "./Dash.styled";

export const Dash = () => {
  const dashData = useContext(DashContext);
  console.log(dashData);
  return (
    <StyledWrapper>
      <StyledPersonal>personal info here</StyledPersonal>
      {dashData.map((ele) => (
        <Card data={ele} />
      ))}
    </StyledWrapper>
  );
};
