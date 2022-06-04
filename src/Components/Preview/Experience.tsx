import React from "react";

const Experience = ({
  experience,
}: {
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}) => {
  return (
    <div className="flex flex-col max-w-[52rem]  gap-4 text-gray-700">
      {experience.map((exp, index) => {
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
              <p className="flex gap-1">
                <span>{exp.startDate}</span>- <span>{exp.endDate}</span>
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="font-thin tracking-widest uppercase">
                <h3 className="font-bold text-black">{exp.position}</h3>
                <p>{exp.company}</p>
              </div>
              <p>{exp.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
