import React from "react";
import CvData from "../../Types/CvData";
import Name from "./Name";
import Address from "./Address";
import ContactInfo from "./ContactInfo";
import About from "./About";
import Education from "./Education";

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
      <About about={data.about} />
      <Education education={data.education} />
    </div>
  );
};

export default Preview;
