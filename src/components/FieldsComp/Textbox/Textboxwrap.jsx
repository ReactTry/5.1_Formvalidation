import React from "react";
import { TextInput } from "./TextInput";



const Textboxwrap = ({  label,type,name,id,handleChange,errorFields}) => {  

  return (
    <TextInput
      type={type}
      label={label}
      name={name}
      id={id}  
      errorFields={errorFields} 
      handleChange={handleChange}       
    />
  );                      
};

export default Textboxwrap;
