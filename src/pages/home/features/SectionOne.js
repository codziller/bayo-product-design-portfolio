import React, { useEffect, useRef, useState } from "react";

import { TABS } from "utils/constants";
import { useTabs } from "hooks/useTabs";
import Customers from "./Customers";
import Vendors from "./Vendors";

const SectionOne = () => {
  const scrollXContainerRef = useRef(null);
  const customersContainerRef = useRef(null);
  const vendorsContainerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const { setActiveTab, tabsComponent } = useTabs({
    tabs: TABS,
  });

  useEffect(() => {
    setWidth(window?.innerWidth);
    function handleResize() {
      setWidth(window?.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActiveSlideUpdate = () => {
    const xCustomer = Number(
      String(
        customersContainerRef?.current?.getBoundingClientRect()?.x
      ).replace("-", "")
    );
    const xVendor = Number(
      String(vendorsContainerRef?.current?.getBoundingClientRect()?.x).replace(
        "-",
        ""
      )
    );
    if (xCustomer < xVendor) {
      setActiveTab(TABS[0].title);
    } else {
      setActiveTab(TABS[1].title);
    }
  };
  const handleCustomScroll = (i) => {
    scrollXContainerRef.current.scrollLeft = width * i;
  };

  return (
    <div className="flex flex-col justify-start items-center h-fit w-full space-y-7 sticky-boundary sm:mb-[0px] relative bg-grey-dark bg-pattern_bg bg-center bg-cover bg-no-repeat px-5 md:px-[8%] lg:px-[12%]">
      <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 sm:mb-[0px] pt-14">
        {tabsComponent(handleCustomScroll)}
        <div className="w-full mb-[20px] sm:mb-[10px]">
          <div
            className="flex w-full gap-8 md:py-3 md:px-0 no-scrollbar overflow-x-auto scroll-smooth snap-mandatory snap-x"
            ref={scrollXContainerRef}
            onScroll={(e) => handleActiveSlideUpdate()}
          >
            <div
              ref={customersContainerRef}
              className="w-full min-w-[100%] max-w-[100%] snap-center overflow-hidden"
            >
              <Customers />
            </div>
            <div
              ref={vendorsContainerRef}
              className="w-full min-w-[100%] max-w-[100%] snap-center overflow-hidden"
            >
              <Vendors />
            </div>
          </div>
          <div id="faqs" className="mb-[20px] sm:mb-[70px]" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
