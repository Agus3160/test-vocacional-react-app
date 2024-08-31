import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useContext, useEffect } from "react";


export type Theme = {
  dark: boolean
  setThemeValue: (theme: boolean) => void
}

export const ThemeContext = createContext<Theme|null>(null);

export type ThemeProviderParams = {
  children: React.ReactNode,
  initTheme: boolean,
}

export const ThemeProvider = ({ children, initTheme }: ThemeProviderParams ) => {

  const [theme, setTheme] = useLocalStorage("theme", initTheme);
  const setThemeValue = (isDark: boolean) => setTheme(isDark);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <ThemeContext.Provider value={{dark: theme, setThemeValue}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if(!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
