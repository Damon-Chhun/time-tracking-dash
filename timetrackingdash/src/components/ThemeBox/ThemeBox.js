import React, { Fragment, useContext } from "react";

import {
  ThemeContext,
  ToggleThemeContext,
} from "../../ContextProviders/ThemeProvider";

import { Box, StyledButton } from "./ThemeBox.styled";

export const ThemeBox = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <Fragment>
      <StyledButton onClick={toggleTheme}>Button</StyledButton>
      <Box darkTheme={darkTheme}>Im a box</Box>
    </Fragment>
  );
};
