import React from "react";

export const RadioWrapperDynamic = ({ label, id, name, children,errorFields }) => {
  return (
    <div className="input-section radio-group">
      <label htmlFor={id}>{label}</label>
      <div>{children}</div>
      {errorFields[name] && <p className="danger">{label} is required</p>}
    </div>
  );
};
 