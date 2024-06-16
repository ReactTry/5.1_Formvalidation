import React from "react";
import SelectInput from "./SelectInput";

export const SelectWrapper = ({ label, id, name,errorFields, dataObj, handleChange }) => {
  return (
    <div className="input-section dropdown-section">
    <label htmlFor={id}>{label} </label>
    <select name={name} id={id} onChange={handleChange}  >
      {dataObj.map((key) => {
        return <SelectInput key={key.value} value={key.value} name={key.name} />;
      })}
    </select>
    {errorFields[name] && (
            <p className="danger">{label} is required</p>
          )}
  </div>
  );
};
