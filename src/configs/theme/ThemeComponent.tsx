import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

import themeOptions from "./ThemeOptions";
import GlobalStyling from "./globalStyles";

type ThemeComponentProps = {
  children: ReactNode;
};

export const ThemeComponent = ({ children }: ThemeComponentProps) => {
  const coreThemeOptions = themeOptions();

  const defaultTheme = createTheme(coreThemeOptions);

  const theme = createTheme(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <GlobalStyles styles={() => GlobalStyling(theme) as any} /> {children}
    </ThemeProvider>
  );
};
