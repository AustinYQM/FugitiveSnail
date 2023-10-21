import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {useMemo, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import TopBar from "./components/top-bar";
import * as React from "react";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function App() {
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: dark)`);
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  const colorMode = useMemo(
    () =>({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      }
    }),
    []);

  const theme = useMemo(
    () => createTheme( {
      palette: {
        mode
      }
    }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
