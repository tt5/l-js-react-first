import React, { useState, useCallback, memo } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { RadioGroup } from "./radiogroup";
import { Form } from "./components/form";

const DarkModeContext = createContext({});

function Button({ children, ...rest }) {
  const isDarkMode = useDarkMode((ctx) => ctx.isDarkMode);
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
  const toggle = useDarkMode((ctx) => ctx.toggle);
  return <Button onClick={toggle}>Colortheme</Button>;
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

function Main() {
  const isDarkMode = useDarkMode((ctx) => ctx.isDarkMode);
  const style = {
    color: isDarkMode ? "white" : "black",
    backgroundColor: isDarkMode ? "black" : "white",
    margin: "-8px",
    minHeight: "100vh",
    boxSizing: "border-box",
  };
  const [data, setData] = useState({
    some: "",
    more: "",
  });
  const onChange = (name) => (value) => setData({ ...data, [name]: value });

  return (
    <main style={style}>
      <Header />
      <h1>Hello</h1>
      <RadioGroup name="group1" onChange={onChange("group1")}>
        <RadioGroup.Option value="one">one</RadioGroup.Option>
        <RadioGroup.Option value="two">two</RadioGroup.Option>
      </RadioGroup>
      <RadioGroup name="group2" onChange={onChange("group2")}>
        <RadioGroup.Option value="one">one</RadioGroup.Option>
        <RadioGroup.Option value="two-empty" icon="☺" isPopular>
          two
          <RadioGroup.Details>
            <RadioGroup name="group2-1" onChange={onChange("group2-1")}>
              <RadioGroup.Option value="one">one</RadioGroup.Option>
              <RadioGroup.Option value="two">two</RadioGroup.Option>
            </RadioGroup>
          </RadioGroup.Details>
        </RadioGroup.Option>
      </RadioGroup>
      {JSON.stringify(data)}
    <Form />
    </main>
  );
}

function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);
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

function useDarkMode(selector) {
  return useContextSelector(DarkModeContext, selector);
}

export default function App() {
  return (
    <DarkModeProvider>
      <Main />
    </DarkModeProvider>
  );
}
