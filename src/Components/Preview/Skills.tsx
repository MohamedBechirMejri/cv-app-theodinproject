import React from "react";

const Skills = ({
  skills,
}: {
  skills: {
    skill: string;
    level: string;
    yearsOfExperience: string;
  }[];
}) => {
  return (
    <div className="flex flex-col max-w-[52rem]  gap-4 text-gray-700">
      {skills.map((skill, index) => {
        return (
          <div key={index} className="flex gap-16 font-medium">
            <div className="flex flex-col items-end justify-start gap-8">
              <h1
                className={`font-bold text-3xl ${
                  index !== 0 ? "opacity-0" : ""
                } text-black  tracking-widest uppercase`}
              >
                Experience
              </h1>
              <p className="flex gap-1"></p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="font-thin tracking-widest uppercase"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
