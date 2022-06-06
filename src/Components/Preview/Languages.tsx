import React from "react";

const Languages = ({
  languages,
}: {
  languages: {
    language: string;
    proficiency: string;
  }[];
}) => {
  return (
    <div className="flex flex-col max-w-[52rem] w-full text-gray-700">
      {languages.map((language, index) => {
        return (
          <div key={index} className="flex w-full gap-16 font-medium">
            <div className="flex flex-col items-end justify-start gap-1">
              <h1
                className={`font-bold text-3xl ${
                  index !== 0 ? "opacity-0" : ""
                } text-black  tracking-widest uppercase`}
              >
                Languages
              </h1>
              <h1 className="text-3xl font-bold tracking-widest text-black uppercase opacity-0">
                experience
              </h1>
              <p className="flex gap-1"></p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="font-thin tracking-widest uppercase">
                {language.language}
              </div>
              <div>Proficiency: {language.proficiency}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
