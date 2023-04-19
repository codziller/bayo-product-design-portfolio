import React, { useState } from "react";
import Button from "components/general/button/Button";
import Input from "components/general/input/Input";
const Banner = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-end space-y-10 md:space-y-0 w-full h-fit md:space-x-8 website-banner pt-[95px] md:pt-[14px] px-5 md:px-[8%] lg:px-[12%] relative bg-white z-20 overflow-y-hidden ">
      <div className="flex flex-col justify-center items-start text-left md:basis-[60%] w-full h-fit z-[5] !ml-0 !mt-0">
        <h1 className="text-grey-dark txt-heading mb-3 md:mb-4 font-poppins font-semibold ">
          <span className="text-blue">Experience</span>
          <br className="md:hidden" /> ultimate{" "}
          <br className="hidden md:block" /> convenience
        </h1>
        <p className="text-grey-dark font-light txt-title mb-5 md:mb-6 ">
          Find reliable cleaning and laundry services at your{" "}
          <br className="hidden lg:block" />
          fingertips from our vetted pool of providers.
        </p>

        <p className="text-grey-dark font-medium txt-heading-alt mb-2 sm:mb-3 ">
          Be the first to know when we launch.
        </p>

        <div className="flex flex-col sm:flex-row justify-start items-center w-full gap-4 sm:gap-5 mb-1.5">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChangeFunc={(val) => setEmail(val)}
          />
          <a
            href="https://calendly.com/bani-inc/sales/"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <Button
              text="Notify me"
              onClick={() =>
                window?.dataLayer?.push({
                  event: "event",
                  eventProps: {
                    category: "Notify me",
                    action: "Notify me",
                    label: "Notify me - home hero section",
                    value: 1,
                  },
                })
              }
              height="h-[42px] sm:h-[44px]"
              textClass="text-[15px]"
              className="w-full sm:w-fit"
            />
          </a>
        </div>

        <span className="text-grey-dark font-light txt-base mb-3 md:mb-9 ">
          *Don&apos;t worry we will not spam you {":)"}
        </span>
        {/* <div className="flex justify-start items-center w-full gap-4 md:gap-5 mb-6 md:mb-0">
          <a
            href="https://calendly.com/txt-inc/sales/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-fit"
          >
            <div className="w-full sm:w-[188px] h-[54px] bg-app_store bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-left sm:bg-center" />
          </a>
          <a
            href="https://calendly.com/txt-inc/sales/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-fit"
          >
            <div className="w-full sm:w-[188px] h-[54px] bg-google_play bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-left sm:bg-center" />
          </a>
        </div> */}
      </div>

      <div className="flex flex-col justify-center items-center md:items-end md:basis-[40%] w-full md:max-h-[60vh] relative z-[5]">
        <div className="flex flex-col justify-center items-center md:items-end w-full h-full min-h-[350px] rounded-[45px] bg-hero bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center z-[8]" />

        <div className="blue-blur-bg min-w-[100%] min-h-[100%] absolute top-0 left-0" />
      </div>
    </div>
  );
};

export default Banner;
