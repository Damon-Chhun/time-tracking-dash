import { styled } from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas:
    "Personal Work Play Study"
    "Personal Exercise Social SelfCare";
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
`;

export const StyledPersonal = styled.div`
  grid-area: Personal;

  height: 518px;
  width: 255px;
  border-radius: 15px;
  border: 1px solid black;
`;
