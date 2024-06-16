import React from "react";

export const CheckboxInput = ({type,name,value,id,label,handleChange,handleBlur}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        id={id}  
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor={id} className="radio-buttons">
        {label}
      </label>
    </>
  );
};


