import React, { useState } from "react";
import Textboxwrap from "../FieldsComp/Textbox/Textboxwrap";
import { CheckboxWrapper } from "../FieldsComp/Checkbox/CheckboxWrapper";
import { RadioHeader } from "../FieldsComp/RadioInput/RadioHeader";
import { errorState, fieldState,Country,Skills } from "../api/data";
import handleChangeEvents from "../functions/handleChange";
import { RadioWrapperDynamic } from "../FieldsComp/RadioInput/RadioWrapperDynamic";
import { RadioInput } from "../FieldsComp/RadioInput/RadioInput";
import { SelectWrapper } from "../FieldsComp/Dropdown/SelectWrapper";

const FormReg = () => {
  const { handleChange, handleSubmit, handleValidateOnBlur,errorFields } = handleChangeEvents();

  //   const [fields, setFields] = useState({...fieldState });
  //   const [errorFields, seterrorFields] = useState({...errorState });
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFields((prev) => ({...prev, [name]: value }));

  //     console.log(fields);

  //     // handleValidateOnBlur(e);
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <p className="caption"> Please fill the form</p>
        <Textboxwrap
          label="First Name"
          type="text"
          name="firstname"
          id="first-name"
          errorFields={errorFields}
          handleChange={handleChange}
        />

        <Textboxwrap
          label="Email"
          type="email"
          name="email"
          id="email"
          errorFields={errorFields}
          handleChange={handleChange}
        />
        <RadioHeader
          label="Gender"
          id="gender"
          name="gender"
          errorFields={errorFields}
          handleChange={handleChange}
        />
     

        <SelectWrapper label="Country" id="country" name="country" errorFields={errorFields} dataObj={Country}  handleChange={handleChange}  />
           {/* With Children props */}
           <RadioWrapperDynamic
          label="Driving License"
          id="license"
          name="license"
          errorFields={errorFields}
        >
          <RadioInput
            type="radio"
            name="license"
            id="yes"
            value="yes"
            label="Yes"
            errorFields={errorFields}
            handleChange={handleChange}
          />
          <RadioInput
            type="radio"
            name="license"
            id="No"
            value="No"
            label="NO"
            errorFields={errorFields}
            handleChange={handleChange}
          />
        </RadioWrapperDynamic>
        <CheckboxWrapper  label="Skills" name="skills" objSkills={Skills} errorFields={errorFields} handleChange={handleChange} handleBlur={handleValidateOnBlur}  />

        <button> Submit </button>
      </form>
    </div>
  );
};

export default FormReg;
