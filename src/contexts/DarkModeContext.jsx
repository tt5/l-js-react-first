import { createContext, useContextSelector } from "use-context-selector";
import React, { useState, useCallback, useEffect } from "react";

const DarkModeContext = createContext({});

export function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  const toggle = useCallback(() => setDarkMode((v) => !v), []);
  const contextValue = {
    isDarkMode,
    toggle,
  };
  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode(selector) {
  return useContextSelector(DarkModeContext, selector);
}


