import { createTheme } from "@mui/material";
import { common, blue } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: common.black,
      dark: common.white,
      light: common.black,
      contrastText: common.white,
    },
    secondary: {
      main: blue[500],
      dark: blue[700],
      light: blue[300],
      contrastText: common.white,
    },
    background: {
      paper: "##303134",
      default: "#202124",
    },
  },
});
