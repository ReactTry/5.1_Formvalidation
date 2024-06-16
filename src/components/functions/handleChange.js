import { useState } from "react";
import { errorState, fieldState } from "../api/data";

export default function handleChangeEvents() {
  const [fields, setFields] = useState({ ...fieldState });
  const [errorFields, seterrorFields] = useState({ ...errorState });
  let newSkills;

  //onChange Events
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "checkbox") {
      newSkills = [...fields.skills];
      if (e.target.checked) {
        newSkills.push(e.target.value);
      } else {
        newSkills = newSkills.filter((skill) => skill !== e.target.value);
      }
      setFields((prev) => ({ ...prev, [name]: newSkills }));
    } else {
      const { name, value } = e.target;
      setFields((prev) => ({ ...prev, [name]: value }));
    }

   
    handleValidateOnBlur(e);
    
  };

  //OnBlur Events
  const handleValidateOnBlur = (e) => {
    const { name, value } = e.target;
    let error = false;
    if (value === "") {
      error = true;
    }

    if (
      name === "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    ) {
      error = true;
    }
    if (e.target.type === "checkbox") {
      if (!e.target.checked && newSkills.length === 0) {
        error = true;
      }
    }

    seterrorFields((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  //form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
    if (isFormValidOnSubmit()) {
     
      alert("Submitted Successfully");
    }
    return;
  };

  //Form validation on submit
  const isFormValidOnSubmit = () => {

      const errors = {
      firstname: false,
      email: false,
      gender: false,
      country: false,
      license:false,
      skills: false,
    };
    if (fields.firstname === "") {
      errors.firstname = true;
    }
    if (
      fields.email === "" ||
      !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        fields.email
      )
    ) {
      errors.email = true;
    }
    if (fields.gender === "") {
      errors.gender = true;
    }
    if (fields.country === "") {
      errors.country = true;
    }
    if (fields.license === "") {
      errors.license = true;
    }
    if (fields.skills.length === 0) {
      errors.skills = true;
    }

    seterrorFields(errors);
    if (Object.values(errors).some((error) => error === true)) {
      return false;
    }
    return true;
  };
  //For Access from another components
  return {
    handleChange,
    handleSubmit,
    fields,
    errorFields,
  };
}
