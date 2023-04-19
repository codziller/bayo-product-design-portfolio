import React, { useEffect, useRef, useState } from "react";

import { TABS } from "utils/constants";
import { useTabs } from "hooks/useTabs";
import Image from "next/image";

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
    <div className="flex flex-col justify-start items-center h-fit w-full space-y-7 sticky-boundary sm:mb-[0px] relative bg-blue-50 bg-pattern_blue_bg bg-left bg-contain bg-no-repeat px-5 md:px-[8%] lg:px-[12%] pb-14">
      <div className="flex flex-col justify-between items-center w-full h-fit gap-y-12 sm:mb-[0px] pt-14">
        <div className="flex flex-col items-center w-full mb-[20px] sm:mb-[10px]">
          <p className="text-grey-dark txt-heading mb-4 sm:mb-6 font-poppins font-medium sm:font-semibold">
            Our story
          </p>
          <p className="text-black text-base md:text-[20px] mb-2 sm:mb-1 font-light text-center">
            Cleand was born after experiencing the frustration of trying to find
            a reliable and affordable cleaning or laundry service provider. They
            realized that many people were facing similar challenges and decided
            to create a platform that would help connect customers with vetted
            cleaning and laundry service providers.
            <br />
            <br />
            Our app is designed to be user-friendly and easy to navigate, making
            it simple for you to find the right cleaning or laundry service
            provider that suits your needs with just a couple clicks.
            <br />
            <br />
            So, whether you need a one-time cleaning service or regular laundry
            service, our app is here to help you find the right provider for
            your needs. Thank you for choosing our cleaning and laundry service
            app!
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-12 ">
          <div className="flex flex-col justify-center items-center gap-[7px]">
            <div className="hidden sm:flex justify-center items-center w-[250px] h-[250px] rounded-full bg-grey-dark ">
              <Image
                src="/avatar.png"
                alt="Picture of the author"
                width={250}
                height={250}
              />
            </div>
            <div className="sm:hidden justify-center items-center w-[130px] h-[130px] rounded-full bg-grey-dark ">
              <Image
                src="/avatar.png"
                alt="Picture of the author"
                width={130}
                height={130}
              />
            </div>
            <p className="text-grey-dark font-semibold text-[20px] pt-2">
              Atogwe Preston
            </p>
            <p className="text-grey-blue font-light text-[15px]">
              Co-founder & CEO
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-[7px]">
            <div className="hidden sm:flex justify-center items-center w-[250px] h-[250px] rounded-full bg-grey-dark ">
              <Image
                src="/avatar.png"
                alt="Picture of the author"
                width={250}
                height={250}
              />
            </div>
            <div className="sm:hidden justify-center items-center w-[130px] h-[130px] rounded-full bg-grey-dark ">
              <Image
                src="/avatar.png"
                alt="Picture of the author"
                width={130}
                height={130}
              />
            </div>
            <p className="text-grey-dark font-semibold text-[20px] pt-2">
              Divine Akubo
            </p>
            <p className="text-grey-blue font-light text-[15px]">
              Co-founder & CTO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
