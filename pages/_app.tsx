import { AppProps } from "next/app";
import { DarkModeSwitch } from "@/features/theme_switcher";
import { useState } from "react";
import ThemeProvider from "@mui/private-theming/ThemeProvider";
import createTheme from "@mui/system/createTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <DarkModeSwitch handleDarkModeChange={handleDarkModeChange} darkMode={darkMode} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
