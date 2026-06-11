import React, { useState, useEffect, memo, useRef } from "react";
import { RadioGroup } from "./radiogroup";
import { Form } from "./components/form";
import { DarkModeToggleButton } from "./components/DarkModeToggleButton";
import { Button } from "./components/Button";
import {DarkModeProvider, useDarkMode} from "./contexts/DarkModeContext"

const ToggleButton = memo(function ToggleButton() {
  const toggle = useDarkMode((ctx) => ctx.toggle);
  const isDarkMode = useDarkMode((ctx) => ctx.isDarkMode);
  const btnRef = useRef(null);

  useEffect(() => {
    btnRef.current?.focus();
  }, []);

  return <DarkModeToggleButton ref={btnRef} onClick={toggle}>
    {isDarkMode ? "☀️ Light" : "🌙 Dark"}
    </DarkModeToggleButton>;
});

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

export default function App() {
  return (
    <DarkModeProvider>
      <Main />
    </DarkModeProvider>
  );
}
