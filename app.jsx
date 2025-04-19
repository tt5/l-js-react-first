import React, { useContext, useState, createContext, memo } from "react";

const DarkModeContext = createContext({});

function Button({ children, ...rest }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const style = {
    backgroundColor: isDarkMode ? "#333" : "#CCC",
    border: "1px solid",
    color: "inherit",
  };

  return (
    <button style={style} {...rest}>
      {children}
    </button>
  );
}

function ToggleButton() {
  const { toggleDarkMode } = useContext(DarkModeContext);
  return <Button onClick={toggleDarkMode}>Colortheme</Button>;
}

const Header = memo(function Header() {
  const style = {
    padding: "10px 5px",
    borderBottom: "1px solid",
    marginBottom: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "flex-end",
  };

  return (
    <header style={style}>
      <Button>Button</Button>
      <ToggleButton />
    </header>
  );
});

const Main = memo(function Main() {
  const { isDarkMode } = useContext(DarkModeContext);
  const style = {
    color: isDarkMode ? "white" : "black",
    backgroundColor: isDarkMode ? "black" : "white",
    margin: "-8px",
    minHeight: "100vh",
    boxSizing: "border-box",
  };

  return (
    <main style={style}>
      <Header />
      <h1>Hello</h1>
    </main>
  );
});

export default function App() {
  console.log("App");
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((v) => !v);
  const contextValue = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      <Main />
    </DarkModeContext.Provider>
  );
}
