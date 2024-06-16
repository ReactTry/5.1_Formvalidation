import React from "react";

export const RadioInput = ({
  type,
  name,
  value,
  id,
  label,
  handleChange,
  errorFields,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
      />
      <label htmlFor={id} className="radio-buttons">
        {label}
       
      </label>
    </>
     
  );
};
