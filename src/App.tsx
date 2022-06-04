import React from "react";
import Preview from "./Components/Preview/Preview";
import Edit from "./Components/Edit/Edit";

function App() {
  const [data, setData] = React.useState({
    name: {
      first: "",
      last: "",
      middle: "",
    },
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    profession: "",
    website: "",
    about: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: "",
      github: "",
      youtube: "",
    },
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
  return (
    <div className="App">
      <Preview data={data} />
      <Edit data={data} setData={setData} />
    </div>
  );
}

export default App;
