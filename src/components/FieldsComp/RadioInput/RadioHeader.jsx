import React from "react";
import { RadioInput } from "./RadioInput";
export const RadioHeader = ({ label, id, name, handleChange, errorFields }) => {
  return (
    <div>
      <div className="input-section radio-group">
        <label htmlFor={id}>{label}</label>
        <div>
          <RadioInput
            type="radio"
            name="gender"
            id="male"
            value="male"
            label="Male"
            errorFields={errorFields}
            handleChange={handleChange}
          />
          <RadioInput
            type="radio"
            name="gender"
            id="female"
            value="female"
            label="Female"
            errorFields={errorFields}
            handleChange={handleChange}
          />
          {errorFields[name] && <p className="danger">{label} is required</p>}
        </div>
      </div>
    </div>
  );
};
