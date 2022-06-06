import React from "react";

const Interests = ({ interests }: { interests: string[] }) => {
  return (
    <div className="flex flex-col max-w-[52rem] w-full text-gray-700">
      {" "}
      <div className="flex w-full px-4 font-medium gap-11">
        <div className="flex flex-col items-end justify-start gap-1">
          <h1
            className={`font-bold text-2xl text-black  tracking-widest uppercase`}
          >
            Interests
          </h1>
          <h1 className="text-2xl font-bold tracking-widest text-black uppercase opacity-0">
            experience
          </h1>
          <p className="flex gap-1"></p>
        </div>
        <div className="flex flex-wrap items-start justify-start gap-2">
          {interests.map((interest, index) => {
            return <div key={index} className="px-4 py-1 bg-yellow-400 rounded-full">{interest}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Interests;
