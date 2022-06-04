import React from "react";
import CvData from "../../Types/CvData";
import Name from "./Name";
import Address from "./Address";
import ContactInfo from "./ContactInfo";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";

const Preview = ({ data }: { data: CvData }) => {
  return (
    <div className="flex flex-col items-center max-w-6xl gap-16 p-8 px-16 m-auto select-none">
      <div className="flex items-end gap-8">
        {" "}
        <Name
          firstName={data.name.first}
          lastName={data.name.last}
          middleName={data.name.middle}
        />
        <div className="flex items-end justify-between w-full gap-10 ">
          <ContactInfo phoneNumber={data.phoneNumber} email={data.email} />{" "}
          <Address
            address={data.address}
            city={data.city}
            state={data.state}
            country={data.country}
          />
        </div>
      </div>
      <About about={data.about} />
      <Education education={data.education} />
      <Experience experience={data.experience} />
    </div>
  );
};

export default Preview;
