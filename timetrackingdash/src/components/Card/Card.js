import React from "react";
import {
  StyledCardWrapper,
  StyledLogoContainer,
  StyledContentContainer,
} from "./Card.styled";
import { image } from "../../Images/Images";

export const Card = ({ data }) => {
  const logoSVG = image.find((ele) => ele.title == data.title).svgContent;

  //console.log(logoSVG);
  return data ? (
    <StyledCardWrapper area={data.title.split(" ").join("")}>
      <StyledLogoContainer dangerouslySetInnerHTML={{ __html: logoSVG }} />
      <StyledContentContainer>
        <h3>{data.title}</h3>
        <h1>{data.timeframes.weekly.current}hrs </h1>
        <h3>Last week{data.timeframes.weekly.previous}hrs</h3>
      </StyledContentContainer>
    </StyledCardWrapper>
  ) : (
    <div>Loading...</div>
  );
};
