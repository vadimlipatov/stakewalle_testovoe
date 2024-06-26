"use client";

import WalletPage from "@/pages/wallet";
import { useState } from "react";
import { DarkModeSwitch } from "@/features/theme_switcher";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/private-theming/ThemeProvider/ThemeProvider";

export default function Home() {
  
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
      {/* <DarkModeSwitch handleDarkModeChange={handleDarkModeChange} darkMode={darkMode} /> */}
      <WalletPage />;
    </ThemeProvider>
  );
 
}
