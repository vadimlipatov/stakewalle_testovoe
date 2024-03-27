import { useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

const DarkModeSwitch = ({
  darkMode,
  handleDarkModeChange,
}: {
  darkMode: boolean;
  handleDarkModeChange: () => void;
}) => {
  // const [darkMode, setDarkMode] = useState(false);

  // const theme = createTheme({
  //   palette: {
  //     mode: darkMode ? "dark" : "light",
  //   },
  // });

  // const handleDarkModeChange = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={handleDarkModeChange} />}
      label="Dark Mode"
    />
  );
};

export { DarkModeSwitch };
