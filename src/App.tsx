import React from "react";

function App() {
  const [data, setData] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    profession: "",
    website: "",
    about: "",
    education: [
      {
        school: "",
        degree: "",
        fieldOfStudy: "",
        grade: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ],
    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    skills: [
      {
        skill: "",
        level: "",
        yearsOfExperience: "",
      },
    ],
  });
  return <div className="App"></div>;
}

export default App;
