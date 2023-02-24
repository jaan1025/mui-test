import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";
import { components } from "./components";

export const globalTheme = createTheme({
  palette,
  typography,
  components,
});