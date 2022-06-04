import React from "react";

const Address = ({
  address,
  city,
  state,
  country,
}: {
  address: string;
  city: string;
  state: string;
  country: string;
}) => {
  return (
    <div className="flex gap-8 pr-8">
      <div className="flex flex-col items-end text-xl font-bold border-black ">
        <p>{address}</p>
        <p>
          {city}, {state}
        </p>
        <p>{country}</p>
      </div>
      <div className="p-[2.5px] bg-black rounded-full"/>
    </div>
  );
};

export default Address;
