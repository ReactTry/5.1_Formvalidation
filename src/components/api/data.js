 const Country = [
     { value: "", name: "Select" },
     { value: "ind", name: "India" },
     { value: "pak", name: "Pakistan" },
     { value: "ban", name: "Bangladesh" },
     { value: "npl", name: "Nepal" },
 ];

 const Skills = [
     { value: "java", name: "Javascript" },
     { value: "html", name: "HTML" },
     { value: "css", name: "Css" },

 ]

 const fieldState = {
     firstname: "",
     email: "",
     gender: "",
     license: "",
     country: "",
     skills: [],
 }
 const errorState = {
     firstname: false,
     email: false,
     gender: false,
     country: false,
     license: false,
     skills: false,
 }

 export { Country, Skills, fieldState, errorState }