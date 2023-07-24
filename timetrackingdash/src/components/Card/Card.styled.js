import { styled } from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 255px;
  height: 260px;
  border: 1px solid black;
  border-radius: 15px;

  grid-area: ${(prop) => prop.area};
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: end;

  padding-right: 15px;

  height: 20%;
`;

export const StyledContentContainer = styled.div`
  position: relative;
  border-radius: 15px;
  height: 80%;
  background-color: #1c204b;
  color: #ffffff;
  z-index: 10;

  padding: 25px;
  box-sizing: border-box;
`;
