import React from "react";
import CvData from "../../Types/CvData";
import Name from "./Name";
import Address from "./Address";

const Preview = ({ data }: { data: CvData }) => {
  return (
    <div>
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
    </div>
  );
};

export default Preview;
