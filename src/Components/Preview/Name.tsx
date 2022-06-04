import React from "react";

const Name = ({
  firstName,
  lastName,
  middleName,
}: {
  firstName: string;
  lastName: string;
  middleName: string;
}) => {
  return (
    <h1 className="flex flex-col items-end w-max font-bold text-4xl">
      <span className="bg-yellow-400">{firstName} </span>
      {middleName && <span> {middleName}</span>}
      <span> {lastName}</span>
    </h1>
  );
};

export default Name;
