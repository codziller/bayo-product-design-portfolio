import React from "react";

import LinkedinIcon from "../../../public/icons/linkedin.svg";
import InstagramIcon from "../../../public/icons/instagram.svg";
import TwitterIcon from "../../../public/icons/twitter.svg";

const Footer = () => {
  const socials = [
    {
      icon: <LinkedinIcon className="scale-[0.9]" />,
      url: "https://www.linkedin.com/in/bayodegoke",
    },
    {
      icon: <InstagramIcon className="scale-[0.9]" />,
      url: "https://www.instagram.com/bayothedesigner/?igshid=YmMyMTA2M2Y%3D",
    },
    {
      icon: <TwitterIcon className="scale-[0.9]" />,
      url: "https://twitter.com/bayothedesigner?s=21&t=bQAKYXkayzpghItBebXgCg",
    },
  ];

  return (
    <footer className="website-footer flex flex-col justify-center items-center w-full lg:ml-10 py-8 md:py-12 px-5 md:pl-0 md:pr-[8%] lg:pr-[7%] space-y-6 md:space-y-3 relative overflow-hidden z-[99] border-t-[0.5px] border-solid border-t-[#2C2C2E]">
      <div className="w-full h-full flex flex-col justify-start items-start gap-3">
        <p className="text-black font-thin text-[20px] ">
          Oluwatobi Bayode Adegoke - Product Designer
        </p>

        <div className=" flex flex-wrap justify-start items-center w-fit gap-6 transition-all duration-150 ease-in-out text-white z-[1]">
          {socials.map(({ url, icon }, i) => (
            <a
              key={url + i}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-textHover transition-all duration-[700ms] ease-in-out"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
