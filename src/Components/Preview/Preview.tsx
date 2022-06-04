import React from "react";
import CvData from "../../Types/CvData";
import Name from "./Name";
import Address from "./Address";
import ContactInfo from "./ContactInfo";

const Preview = ({ data }: { data: CvData }) => {
  return (
    <div className="select-none">
      <Name
        firstName={data.name.first}
        lastName={data.name.last}
        middleName={data.name.middle}
      />
      <Address
        address={data.address}
        city={data.city}
        state={data.state}
        country={data.country}
      />
      <ContactInfo phoneNumber={data.phoneNumber} email={data.email} />
    </div>
  );
};

export default Preview;
