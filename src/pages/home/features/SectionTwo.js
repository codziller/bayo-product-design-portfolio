import Accordion from "components/general/accordion";
import React, { useState } from "react";
import { FAQS } from "utils/constants";

const SectionTwo = () => {
  const [activeItem, setActiveItem] = useState(FAQS[0]?.question);

  return (
    <div className="flex flex-col md:flex-row justify-start md:justify-between items-center bg-pattern_bg_2 bg-top bg-contain bg-no-repeat sm:bg-none md:bg-blue-50 w-full min-h-[500px] md:gap-x-8 px-5 md:pr-[5%] lg:pr-[8%]">
      <div className="flex flex-col justify-start items-center md:items-start md:basis-[50%] w-full md:h-full relative sm:bg-pattern_bg_2 bg-center bg-cover bg-no-repeat md:pl-[5%] lg:pl-[8%]">
        <p className="text-grey-dark txt-heading mb-1 font-poppins font-medium sm:font-semibold pt-10 pb-6 md:pb-0 md:pt-16">
          <span className="text-blue">Common </span> Questions
        </p>
      </div>

      <div className="flex flex-col justify-center items-start text-left md:basis-[50%] w-full h-fit relative">
        {FAQS.map((item, i) => (
          <Accordion
            key={i}
            data={item}
            isCollapsed={item.question !== activeItem}
            onClick={() =>
              setActiveItem((prev) =>
                prev === item.question ? "" : item.question
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
