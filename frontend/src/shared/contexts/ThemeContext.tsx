import {
  createContext,
  useContext,
  FC,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

// MATERIAL UI
import { LightTheme, DarkTheme } from "../themes";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";

interface IThemeContext {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          height="100vh"
          width="100vw"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
