import React from "react";
import Preview from "./Components/Preview/Preview";
import Edit from "./Components/Edit/Edit";

function App() {
  const [data, setData] = React.useState({
    name: {
      first: "Mohamed",
      middle: "Bechir",
      last: "Mejri",
    },
    phoneNumber: "21655209052",
    email: "mohamed.bechir.mejri.dev@gmail.com",
    address: "28 Rue 62951, Omrane Superieur",
    city: "Tunis",
    country: "Tunisia",
    profession: "Web Developer",
    website: "MohamedBechirMejri.dev",
    about: "lorem ipsum",
    socialLinks: {
      facebook: "",
      twitter: "MohamedBechirMe",
      linkedin: "MohamedBechirMejri",
      instagram: "",
      github: "MohamedBechirMejri",
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
