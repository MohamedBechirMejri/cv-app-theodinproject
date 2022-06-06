import React from "react";

const Education = ({
  education,
}: {
  education: {
    school: string;
    degree: string;
    description: string;
    startDate: string;
    endDate: string;
  }[];
}) => {
  return (
    <div className="flex flex-col max-w-[52rem] gap-4 text-gray-700">
      {education.map((edu, index) => {
        return (
          <div key={index} className="flex gap-12 px-4 font-medium">
            <div className="flex flex-col items-end justify-start gap-8">
              <h1
                className={`font-bold text-2xl ${
                  index !== 0 ? "opacity-0" : ""
                } text-black  tracking-widest uppercase`}
              >
                Education
              </h1>
              <p className="flex gap-1">
                <span>{edu.startDate}</span>- <span>{edu.endDate}</span>
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="font-thin tracking-widest uppercase">
                <h3 className="font-bold text-black">{edu.degree} Degree</h3>
                <p>{edu.school}</p>
              </div>
              <p>{edu.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
