import { styled } from "styled-components";

export const StyledCardWrapper = styled.div`
  border: 5px solid white;
  width: 100%;
  height: 100%;

  border-radius: 15px;

  grid-area: ${(prop) => prop.area};

  position: relative;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 15px;
  height: 70px;
  z-index: 1;

  border-radius: 15px;

  background-color: #${(props) => props.color};

  position: absolute;
  top: 0;
  left: 0;
  width: 94%;
`;

export const StyledContentContainer = styled.div`
  position: absolute;
  border-radius: 15px;

  background-color: #1c204b;
  color: #ffffff;
  z-index: 10;

  padding: 25px;
  box-sizing: border-box;

  top: 50px;
  width: 100%;
  height: 83%;
`;
