import React from "react";
import CvData from "../../Types/CvData";
import Name from "./Name";

const Preview = ({ data }: { data: CvData }) => {
  return (
    <div>
      <Name
        firstName={data.name.first}
        lastName={data.name.last}
        middleName={data.name.middle}
      />
    </div>
  );
};

export default Preview;
