import React, { useState } from "react";

export function RadioGroup({ name, options, onChange }) {
  const [selectedValue, setSelectedValue] = useState("empty");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex start",
      }}
    >
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
      <p>{selectedValue}</p>
    </div>
  );
}
