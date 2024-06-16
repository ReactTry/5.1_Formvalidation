import React from "react";
import { CheckboxInput } from "./CheckboxInput";

export const CheckboxWrapper = ({ label, name, objSkills,errorFields ,handleChange,handleBlur }) => {
  return (
    <div className="input-section radio-group">
      <label htmlFor="">{label} </label>
      <div>
        {objSkills.map((skills) => {
          return (
            <CheckboxInput key={skills.value}
              type="Checkbox"
              name={name}
              value={skills.value}
              id={skills.value}
              label={skills.name}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          );
        })}
        {errorFields[name] && (
          <p className="danger">Atleast one {label} is required</p>
        )}
      </div>
    </div>
  );
};
