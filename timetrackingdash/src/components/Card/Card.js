import React from "react";
import {
  StyledCardWrapper,
  StyledLogoContainer,
  StyledContentContainer,
} from "./Card.styled";
import { image } from "../../Images/Images";

export const Card = ({ data, timeFrame }) => {
  const logoSVG = image.find((ele) => ele.title == data.title);

  return data ? (
    <StyledCardWrapper area={data.title.split(" ").join("")}>
      <StyledLogoContainer
        color={logoSVG.color}
        dangerouslySetInnerHTML={{ __html: logoSVG.svgContent }}
      />
      <StyledContentContainer>
        <h3>{data.title}</h3>
        <h1>{data.timeframes[timeFrame].current}hrs </h1>
        <h3>Last week{data.timeframes[timeFrame].previous}hrs</h3>
      </StyledContentContainer>
    </StyledCardWrapper>
  ) : (
    <div>Loading...</div>
  );
};
