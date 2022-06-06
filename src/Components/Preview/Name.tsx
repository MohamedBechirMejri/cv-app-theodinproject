import React from "react";

const Name = ({
  firstName,
  lastName,
  middleName,
  profession,
  website,
}: {
  firstName: string;
  lastName: string;
  middleName: string;
  profession: string;
  website: string;
}) => {
  return (
    <h1 className="flex flex-col items-end text-4xl font-bold w-max">
      <span className="bg-yellow-400">{firstName} </span>
      {middleName && <span> {middleName}</span>}
      <span> {lastName}</span>
      <span className="relative py-2 text-lg font-normal tracking-widest ">
        {profession}
        <span className="absolute ml-14 font-bold [letter-spacing:.2rem] lowercase">
          www.
          {website
            .replace("https://", "")
            .replace("www", "")
            .replace("http://", "")}
        </span>
      </span>
    </h1>
  );
};

export default Name;
