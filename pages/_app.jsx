import "../styles/globals.css";
import "../styles/styles.css";

import { ThemeProvider } from "@mui/material/styles";
import { purple, red } from "@mui/material/colors";
import { createTheme, useTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#615e5b",
    },
    secondary :{
      main: red[500],

    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
