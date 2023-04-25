import React, { useEffect, useRef, useState } from "react";
import { GREETINGS } from "utils/constants";
import useInterval from "hooks/useInterval";
import Link from "next/link";

const Banner = () => {
  const greetingRef = useRef(null);
  const greetingHeight = 45;
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useInterval(
    () => {
      handleSwitchGreeting();
    },
    // Delay in milliseconds or null to stop it
    currentGreeting <= (GREETINGS.length - 1) * greetingHeight ? 2000 : null
  );

  const handleSwitchGreeting = () => {
    setCurrentGreeting(greetingRef?.current?.scrollTop + greetingHeight);
    greetingRef.current.scrollTop += greetingHeight;
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-end space-y-10 md:space-y-0 w-full h-fit min-h-[500px]  md:space-x-8 website-banner hero-section px-5 md:px-[8%] lg:px-[7%] mb-[60px] md:mb-[120px] relative bg-white z-20 overflow-hidden ">
      <div className="flex flex-col justify-center items-start text-left md:basis-[calc(100%-375px)] w-full h-fit z-[5] pt-12 md:pt-10">
        <p className="text-[#2C2C2E] font-thin text-base mb-5 md:mb-12 ">
          News flash - I&apos;m currently looking for mid or senior - level
          design role!!!
        </p>
        <div className="flex justify-start items-center gap-2 mb-5 md:mb-4">
          <div className="flex flex-col justify-center items-center md:items-end h-[40px] w-[40px] rounded-full bg-hero bg-cover bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center" />

          <div
            ref={greetingRef}
            className="flex flex-col justify-start items-start no-scrollbar overflow-y-auto scroll-smooth snap-mandatory snap-y h-[45px]"
            onScroll={() => setCurrentGreeting(greetingRef?.current?.scrollTop)}
          >
            {GREETINGS.map((item) => (
              <span
                key={item}
                className="text-left leading-[45px] h-[45px] text-blue text-[20px] font-normal snap-center"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-grey-dark text-[40px] md:text-[55px] xlg:text-[72px] mb-3 md:mb-4 font-semibold leading-tight ">
          Product &
          <br className="" />
          Motion Design
        </h1>
        <p className="text-[#2C2C2E] font-light text-[20px] mb-5 md:mb-6 leading-[1.9] ">
          Hi, I&apos;m <span className="font-medium">Bayode</span>, a product
          designer and sometimes fascinated by motion design. Currently based in
          Lagos, Nigeria. Greatly inspired by work that improves accessibility
          for the human race.
        </p>

        <Link
          href="#projects"
          scroll={false}
          className="text-grey-dark pb-4 text-[20px] h-[40px] border-b-[3px] border-b-black transition-all duration-300 hover:border-b-[10px] cursor-pointer "
        >
          Selected works
        </Link>
      </div>

      <div className="flex flex-col justify-end items-center md:basis-[375px] w-full md:max-h-[60vh] relative z-[5]">
        <div className="flex justify-center items-center w-full h-full ">
          <div className="flex justify-center items-center relative h-[300px] w-[300px] sm:h-[375px] sm:w-[375px] ">
            <div className="border-[20px] border-solid border-grey-bordercolor border-t-blue border-r-blue rounded-full w-full h-full spin-animate " />

            <div className="flex flex-col justify-center items-center md:items-end h-[calc(100%-40px)] w-[calc(100%-40px)] rounded-[45px] bg-hero bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-left md:bg-center z-[8] absolute" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
