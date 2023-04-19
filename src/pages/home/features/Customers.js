import React, { useMemo, useRef, useState } from "react";
import { CUSTOMER_DATA } from "utils/constants";

const Customers = () => {
  const itemsRef = useRef([]);
  const [activeTab, setActiveTab] = useState(CUSTOMER_DATA[0]);
  const activeTabIndex = useMemo(
    () => CUSTOMER_DATA?.findIndex(({ image }) => image === activeTab?.image),
    [activeTab]
  );

  const slidePositionSlg = useMemo(
    () => 202 * activeTabIndex,
    [activeTabIndex]
  );
  const slidePositionMd = useMemo(() => 230 * activeTabIndex, [activeTabIndex]);
  const slidePosition = useMemo(() => 190 * activeTabIndex, [activeTabIndex]);
  return (
    <div className="flex flex-col justify-between items-center w-full h-fit md:gap-y-12">
      <div className="flex flex-col justify-between items-start w-full h-fit md:pt-8">
        <p className="text-white txt-heading mb-2 sm:mb-1 font-poppins font-medium sm:font-semibold">
          Busy schedule? No problem!{" "}
          <span className="text-blue-alt">Cleand</span> got{" "}
          <br className="hidden lg:block" />
          you covered
        </p>
        <p className="text-blue-50 font-light txt-title mb-5 md:mb-6 ">
          Your Saturdays are too precious to spent on cleaning chores, you
          should be outside with the gang.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-10 md:gap-y-0 w-full min-h-[500px] md:gap-x-8 ">
        <div className="flex flex-col justify-center items-center md:items-start md:basis-[50%] slg:basis-[40%] w-full relative pt-5 md:pt-0">
          {activeTab?.image ? (
            <div
              className={`flex flex-col justify-center items-center md:items-start w-full h-full min-h-[350px] rounded-[45px] ${activeTab?.image} bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center md:bg-left z-[8] md:scale-150 md:ml-[125px] transition-all duration-[500ms] ease-in`}
            />
          ) : null}
        </div>

        <div className="flex flex-col justify-center items-start text-left md:basis-[50%] slg:basis-[60%] w-full h-fit relative">
          {CUSTOMER_DATA.map(({ icon, title, body, image }, i) => (
            <div
              key={title + i}
              className="flex flex-col justify-center items-start gap-[12px] z-[9] px-6 h-[190px] md:h-[230px] slg:h-[202px] "
              ref={(el) => (itemsRef.current[i] = el)}
              onMouseEnter={() => setActiveTab({ image })}
            >
              <span className="pb-3">{icon}</span>
              <p className="text-blue-50 font-medium text-base sm:text-lg">
                {title}
              </p>
              <p className="text-blue-50 font-light text-sm sm:text-[15px]">
                {body}
              </p>
            </div>
          ))}

          <div
            className="hidden md:block slg:hidden absolute left-0 top-[4px] w-full h-[230px] bg-black-light rounded-[5px] transition-all duration-500 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
            style={{
              transform: `translateY(${slidePositionMd}px)`,
            }}
          />

          <div
            className="hidden slg:block absolute left-0 top-[4px] w-full h-[202px] bg-black-light rounded-[5px] transition-all duration-500 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
            style={{
              transform: `translateY(${slidePositionSlg}px)`,
            }}
          />

          <div
            className="md:hidden absolute left-0 top-[4px] w-full h-[190px] bg-black-light rounded-[5px] transition-all duration-500 ease-in-out shadow-[0px_2px_4px_rgba(0,0,0,0.1)]"
            style={{
              transform: `translateY(${slidePosition}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
