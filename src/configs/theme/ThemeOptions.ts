import { ThemeOptions } from "@mui/material";
import { deepmerge } from "@mui/utils";

const themeOptions = (): ThemeOptions => {
  const themeConfig = {
    typography: {
      fontFamily: [
        "Public Sans",
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    shape: {
      borderRadius: 6,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return deepmerge(themeConfig, {});
};

export default themeOptions;
