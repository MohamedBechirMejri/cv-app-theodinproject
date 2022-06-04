import React from "react";
import { BsGlobe, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const ContactInfo = ({
  website,
  phoneNumber,
  email,
}: {
  website: string;
  phoneNumber: string;
  email: string;
}) => {
  return (
    <div>
      <p className="flex items-center gap-2 font-semibold text-gray-500">
        <span className="flex items-center font-bold text-black ">
          <BsGlobe />
        </span>
        {website}
      </p>
      <p className="flex items-center gap-2 font-semibold text-gray-500">
        <span className="flex items-center font-bold text-black ">
          <BsTelephone />
        </span>
        +{phoneNumber}
      </p>
      <p className="flex items-center gap-2 font-semibold text-gray-500">
        <span className="flex items-center font-bold text-black ">
          <MdOutlineEmail />
        </span>
        {email}
      </p>
    </div>
  );
};

export default ContactInfo;
