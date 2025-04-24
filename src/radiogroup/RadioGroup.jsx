import React from "react";
import { RadioGroupContext } from "./contexts";
import { Option } from "./Option";
import { Details } from "./Details";
import { useContextValue } from "./useContextValue";

export function RadioGroup({ children, name, onChange }) {
  const contextValue = useContextValue({ name, onChange });

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
        {contextValue.selectedValue}
      </RadioGroupContext.Provider>
    </div>
  );
}

RadioGroup.Option = Option;
RadioGroup.Details = Details;
