import React, {
  useState,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from "react";
import {darkTheme} from "../themes/Dark";
import {lightTheme} from "../themes/Light";

import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";

interface iThemeContextData {
  themeName: string;
  toggleTheme: () => void;
}

const themeContext = createContext({} as iThemeContextData);

export const useAppThemeContext = () => {
  return useContext(themeContext);
};

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  let currentTheme = "light";

  const [themeName, setthemename] = useState<string>(currentTheme);

  const toggleTheme = useCallback(() => {
    setthemename((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName == "light") {
      return lightTheme;
    } else {
      return darkTheme;
    }
  }, [themeName]);

  return (
    <themeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
          color={theme.palette.primary.main}
        >
          {children}
        </Box>
      </ThemeProvider>
    </themeContext.Provider>
  );
};
