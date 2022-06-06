import React from "react";

const Skills = ({
  skills,
  tools,
}: {
  skills: {
    skill: string;
    level: number;
    yearsOfExperience: string;
  }[];
  tools: {
    tool: string;
    level: number;
  }[];
}) => {
  return (
    <div className="flex flex-col max-w-[52rem] w-full text-gray-700">
      {skills.map((skill, index) => {
        return (
          <div key={index} className="flex w-full px-4 font-medium gap-11">
            <div className="flex flex-col items-end justify-start gap-6">
              <h1
                className={`font-bold text-2xl ${
                  index !== 0 ? "opacity-0" : ""
                } text-black  tracking-widest uppercase`}
              >
                Skills
              </h1>
              <h1 className="text-2xl font-bold tracking-widest text-black uppercase opacity-0">
                experience
              </h1>
              <p className="flex gap-1"></p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="font-thin tracking-widest uppercase">
                {skill.skill}
              </div>
              <p>{skill.yearsOfExperience} Years Of Experience</p>
              <div>level: {skill.level}% </div>{" "}
              <div
                className="h-2 bg-yellow-400 "
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>
          </div>
        );
      })}
      {tools.map((tool, index) => {
        return (
          <div key={index} className="flex w-full px-4 font-medium gap-11">
            <div className="flex flex-col items-end justify-start gap-2">
              <h1
                className={`font-bold text-3xl ${
                  index !== 0 ? "opacity-0" : "opacity-0"
                } text-black  tracking-widest uppercase`}
              >
                Tools
              </h1>
              <h1 className="text-2xl font-bold tracking-widest text-black uppercase opacity-0">
                experience
              </h1>
              <p className="flex gap-1"></p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="font-thin tracking-widest uppercase">
                {tool.tool}
              </div>
              <div>level: {tool.level}% </div>{" "}
              <div
                className="h-2 bg-yellow-400 "
                style={{
                  width: `${tool.level}%`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
