import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center md:justify-between items-start gap-y-8 md:gap-y-0 w-full md:h-[90vh] min-h-[450px]  md:gap-x-8 hero-section px-5 md:px-[8%] lg:px-[7%] mb-[50px] md:mb-[100px] relative bg-white z-20 pt-14 lg:pt-7">
      <p className="text-[#2C2C2E] font-thin text-base mb-5 md:mb-auto ">
        News flash - I&apos;m currently looking for mid or senior - level design
        role!!!
      </p>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-5 md:gap-y-0 w-full h-full">
        <div className="flex flex-col justify-center items-start text-left md:basis-[40%] w-full h-fit z-[5] ">
          <div className="flex flex-col justify-center items-start text-left md:basis-[50%] w-full h-full z-[5] my-auto ">
            <h1 className="text-grey-dark text-[40px] md:text-[55px] xlg:text-[72px] mb-3 md:mb-4 font-semibold ">
              Bani
            </h1>
            <p className="text-grey-dark text-[30px] md:text-[45px] mb-2">
              Payment link
            </p>
            <p className="text-[#2C2C2E] font-thin text-[24px] md:text-[28px] mb-5 md:mb-6 leading-[1.9] ">
              Responsive-web{" "}
              <span className="text-sm">{"(Merchant & Customer)"}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:basis-[60%] w-full h-full relative z-[5]">
          <div className="flex flex-col justify-center items-center md:items-end min-h-[450px] w-full bg-pl-hero bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-left md:bg-center z-[8]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
