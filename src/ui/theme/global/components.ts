import { ThemeOptions } from "@mui/material/styles";

export const components: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
    variants: [],
  },
  MuiRating: {
    styleOverrides: {
      root: {
        color: '#000'
      },
    },
  }
};
