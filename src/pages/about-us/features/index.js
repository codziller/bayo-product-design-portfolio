import React from "react";

import Banner from "./Banner";
import SectionOne from "./SectionOne";

const HomeList = () => {
  return (
    <div className="flex flex-col justify-start items-center h-fit w-full">
      <Banner />
      <SectionOne />
    </div>
  );
};
export default HomeList;
