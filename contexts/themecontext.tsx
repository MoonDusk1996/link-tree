import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from "react";
import { darkTheme } from "../themes/Dark";
import { lightTheme } from "../themes/Light";

import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";

import { setCookie, parseCookies } from "nookies";

interface iThemeContextData {
  themeName: string | undefined;
  toggleTheme: () => void;
}

const themeContext = createContext({} as iThemeContextData);

export const useAppThemeContext = () => {
  return useContext(themeContext);
};

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, setthemename] = useState<string>();
  useEffect(() => {
    setthemename(parseCookies().user_theme);
  });

  const toggleTheme = useCallback(() => {
    setthemename((oldThemeName) =>
      oldThemeName === "light" || oldThemeName == undefined ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName == "dark") {
      setCookie(null, "user_theme", "dark", {
        path: "/",
      });
      return darkTheme;
    } else if (themeName == "light") {
      setCookie(null, "user_theme", "light", {
        path: "/",
      });
      return lightTheme;
    }
    return lightTheme;
  }, [themeName]);

  return (
    <themeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          minHeight={"100vh"}
          minWidth={"100vw"}
          bgcolor={theme.palette.background.default}
          color={theme.palette.primary.contrastText}
        >
          {children}
        </Box>
      </ThemeProvider>
    </themeContext.Provider>
  );
};
