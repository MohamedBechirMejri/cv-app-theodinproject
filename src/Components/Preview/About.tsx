import React from "react";
import { IoMdQuote } from "react-icons/io";

const About = ({ about }: { about: string }) => {
  return (
    <div className="flex items-stretch pl-6 font-medium text-black gap-14">
      <div className="flex items-stretch gap-4 text-3xl">
        <IoMdQuote />
        <div className="p-[2.5px] bg-black rounded-full" />
      </div>
      <p className="h-full max-w-lg text-justify">{about}</p>
    </div>
  );
};

export default About;
