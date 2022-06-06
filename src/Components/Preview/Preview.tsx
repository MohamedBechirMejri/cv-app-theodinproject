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
import Interests from "./Interests";
import SocialPresence from "./SocialPresence";

const Preview = ({ data }: { data: CvData }) => {
  return (
    <div className="flex flex-col items-center max-w-[80rem] gap-16 p-8 px-16 pb-32 m-auto select-none">
      <div className="flex items-start gap-14">
        {" "}
        <Name
          firstName={data.name.first}
          lastName={data.name.last}
          middleName={data.name.middle}
          profession={data.profession}
          website={data.website}
        />
        <div className="flex items-start justify-between w-full gap-10 ">
          <ContactInfo
            linkedin={data.socialLinks.linkedin}
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
      <Interests interests={data.interests} />
      <SocialPresence socialLinks={data.socialLinks} />
    </div>
  );
};

export default Preview;
