import React from "react";
import CvData from "../../Types/CvData";
import Name from "./Name";
import Address from "./Address";
import ContactInfo from "./ContactInfo";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Languages from "./Languages";

const Preview = ({ data }: { data: CvData }) => {
  return (
    <div className="flex flex-col items-center max-w-6xl gap-16 p-8 px-16 pb-32 m-auto select-none">
      <div className="flex items-start gap-8">
        {" "}
        <Name
          firstName={data.name.first}
          lastName={data.name.last}
          middleName={data.name.middle}
        />
        <div className="flex items-start justify-between w-full gap-10 ">
          <ContactInfo
            website={data.website}
            phoneNumber={data.phoneNumber}
            email={data.email}
          />{" "}
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
      <Skills skills={data.skills} tools={data.tools} />
      <Languages languages={data.languages} />
    </div>
  );
};

export default Preview;
