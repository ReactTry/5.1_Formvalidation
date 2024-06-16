import React from "react";

export const TextInput = ({ label, type, name, id, handleChange,errorFields }) => {

  return (
    <div>
      <div className="input-section">
        <label htmlFor={id}>{label}</label>
        <input type={type} name={name} id={id} onChange={handleChange} />
        {errorFields[name] && (
        <p className="danger">{label} is required</p>
      )}
      </div>
      
    </div>
  );
};
