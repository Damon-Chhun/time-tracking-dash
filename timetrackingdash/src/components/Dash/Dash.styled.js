import { styled } from "styled-components";

export const StyledWrapper = styled.div`
  border: 5px solid purple;
  margin-left: 150px;
  margin-right: 150px;
  height: 50vh;
  width: 100vw;
  display: grid;
  grid-template-areas:
    "Personal Work Play Study"
    "Personal Exercise Social SelfCare";
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);

  grid-gap: 40px;

  padding: 10px;
`;

export const StyledPersonal = styled.div`
  grid-area: Personal;

  height: 518px;
  width: 255px;
  border-radius: 15px;
  border: 1px solid black;
`;
