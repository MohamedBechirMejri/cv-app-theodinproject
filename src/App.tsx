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
    address: "28 Rue 62951",
    city: "Omrane Superieur",
    state: "Tunis",
    country: "Tunisia",
    profession: "Web Developer",
    website: "MohamedBechirMejri.dev",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur tempore a odit dolores nobis sed consequuntur laudantium, vero itaque iure eveniet, perspiciatis deleniti unde provident veniam saepe ratione voluptatibus.",
    socialLinks: {
      facebook: "MohamedBechirMejri",
      twitter: "MohamedBechirMe",
      linkedin: "MohamedBechirMejri",
      instagram: "MohamedBechirMejri",
      github: "MohamedBechirMejri",
      youtube: "MohamedBechirMejri",
      discord: "MohamedBechirMejri",
    },
    education: [
      {
        school: "University Of Mars",
        degree: "Master",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur tempore a odit dolores nobis sed consequuntur laudantium, vero itaque iure eveniet, perspiciatis deleniti unde provident veniam saepe ratione voluptatibus.",
        startDate: "2051",
        endDate: "2053",
      },
      {
        school: "University Of Uranus",
        degree: "Bachelor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur tempore a odit dolores nobis sed consequuntur laudantium, vero itaque iure eveniet, perspiciatis deleniti unde provident veniam saepe ratione voluptatibus.",
        startDate: "2049",
        endDate: "2051",
      },
    ],
    experience: [
      {
        company: "Google",
        position: "CEO",
        startDate: "2020",
        endDate: "2022",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur tempore a odit dolores nobis sed consequuntur laudantium, vero itaque iure eveniet, perspiciatis deleniti unde provident veniam saepe ratione voluptatibus.",
      },
      {
        company: "Facebook",
        position: "CEO",
        startDate: "2022",
        endDate: "Present",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur tempore a odit dolores nobis sed consequuntur laudantium, vero itaque iure eveniet, perspiciatis deleniti unde provident veniam saepe ratione voluptatibus.",
      },
    ],
    skills: [
      {
        skill: "Javascript",
        level: 70,
        yearsOfExperience: "1.5",
      },
      {
        skill: "Typescript",
        level: 40,
        yearsOfExperience: "0.5",
      },
      {
        skill: "React",
        level: 65,
        yearsOfExperience: "0.8",
      },
    ],
    languages: [
      {
        language: "English",
        proficiency: "Fluent",
      },
      {
        language: "Arabic",
        proficiency: "Native",
      },
      {
        language: "French",
        proficiency: "Beginner",
      },
    ],

    tools: [
      {
        tool: "Git",
        level: 40,
      },
      {
        tool: "Gulp",
        level: 0,
      },
      {
        tool: "Webpack",
        level: 77,
      },
    ],
    interests: ["Coding", "Reading", "Traveling"],
  });

  const [isEditing, setIsEditing] = React.useState(false);
  return (
    <div className="App">
      {isEditing ? (
        <Edit data={data} setData={setData} setIsEditing={setIsEditing} />
      ) : (
        <Preview data={data} setIsEditing={setIsEditing} />
      )}
    </div>
  );
}

export default App;
