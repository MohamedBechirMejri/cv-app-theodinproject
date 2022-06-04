import React from "react";
// import { AiOutlineNumber } from "react-icons/ai";
// import { MdAlternateEmail } from "react-icons/md";
const ContactInfo = ({
  phoneNumber,
  email,
}: {
  phoneNumber: string;
  email: string;
}) => {
  return (
    <div>
      <p className="flex items-center gap-2 font-semibold text-gray-500">
        <span className="flex items-center pl-2 font-bold text-black bg-yellow-400">
          {" "}
          {/* <AiOutlineNumber className="bg-yellow-400" /> */}
          P:{" "}
        </span>
        +{phoneNumber}
      </p>
      <p className="flex items-center gap-2 font-semibold text-gray-500">
        <span className="flex items-center pl-2 font-bold text-black bg-yellow-400">
          {" "}
          {/* <MdAlternateEmail className="bg-yellow-400" /> */}
          E:{" "}
        </span>
        {email}
      </p>
    </div>
  );
};

export default ContactInfo;
