import React, { useState } from "react";
import {RadioGroupContext} from "./contexts"
import {Option} from "./Option"
import {Details} from "./Details"

export function RadioGroup({ children, name, onChange }) {
  const [selectedValue, setSelectedValue] = useState("empty");
  const handleChange = (value) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const contextValue = {
    name,
    selectedValue,
    onChange: handleChange
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex start",
      }}
    >
      <RadioGroupContext.Provider value={contextValue}>
        {children}
      </RadioGroupContext.Provider>
      <p>{selectedValue}</p>
    </div>
  );
}

RadioGroup.Option = Option;
RadioGroup.Details = Details;
