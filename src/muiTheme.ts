import { createTheme } from "@mui/material";
import { theme } from "./theme.ts";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme["color-detached"],
    },
    secondary: {
      main: theme["color-neutral-dark"],
    },
    text: {
      primary: theme["color-neutral-dark"],
      secondary: theme["color-detached"],
    },
  },
});
