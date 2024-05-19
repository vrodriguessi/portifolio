import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#1a1b1c',
      },
      secondary: {
        main: '#bf6370',
      },
    },
    typography: {
        fontFamily: "Apple Chancery, cursive"
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;