import styled from "styled-components";

export const Box = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.darkTheme ? "black" : "white")};
  color: ${(props) => (props.darkTheme ? "white" : "black")};
`;

export const StyledButton = styled.button`
  height: 100px;
  width: 200px;
`;
