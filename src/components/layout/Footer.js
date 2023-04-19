import React, { useState } from "react";
import Link from "next/link";

import Logo from "../../../public/logo_white.svg";
import FacebookIcon from "../../../public/facebook.svg";
import InstagramIcon from "../../../public/instagram.svg";
import TwitterIcon from "../../../public/twitter.svg";
import Button from "components/general/button/Button";
import Input from "components/general/input/Input";

const Footer = () => {
  const [email, setEmail] = useState("");
  const footerLinks = [
    {
      title: "Contact",
      links: [
        { title: "help@cleand.com", url: "mailto:help@cleand.com" },
        { title: "+234 70 686 200 686", url: "tel:+23470686200686" },
        {
          socials: [
            {
              icon: <FacebookIcon className="scale-[0.9]" />,
              url: "https://facebook.com/cleand",
            },
            {
              icon: <InstagramIcon className="scale-[0.9]" />,
              url: "https://instagram.com/cleand",
            },
            {
              icon: <TwitterIcon className="scale-[0.9]" />,
              url: "https://twitter.com/cleand",
            },
          ],
        },
      ],
    },

    {
      title: "Company",
      links: [
        { title: "About Us", url: "https://blog.cleand.africa" },
        { title: "Support", url: "https://calendly.com/cleand-inc/sales/" },
        {
          title: "Meet our founders.",
          url: "https://calendly.com/cleand-inc/sales/",
        },
      ],
    },
  ];

  return (
    <footer className="website-footer flex flex-col justify-center items-center w-full py-8 md:py-12 px-5 md:px-[8%] lg:px-[12%] bg-grey-dark space-y-6 md:space-y-3 relative overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="relative flex flex-col-reverse md:flex-row justify-start items-start mx-auto w-full gap-y-10 md:gap-y-0 gap-x-2">
          <div className="w-[50%] h-full hidden md:flex flex-col justify-start items-start gap-2 pt-4 ">
            <Link className="!my-0" href="/">
              <Logo className="scale-[0.95]" />
            </Link>
            <p className="break-words text-left max-w-[100%] text-white font-light text-[13px] sm:text-lg">
              We clean, so you don’t
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 justify-between items-start w-full transition-all duration-150 ease-in-out text-white cleand-base">
            {footerLinks.map(({ title, links }, i) => (
              <div
                className={`flex flex-col justify-start flex-grow items-start gap-y-6`}
                key={title + i}
              >
                <p className={` font-semibold text-xl text-white `}>{title}</p>

                {links && (
                  <ul className=" flex flex-col justify-start items-start gap-y-5 text-blue-50 text-base font-light">
                    {links.map(({ title, link, url, socials }, ind) => (
                      <li
                        className="whitespace-nowrap hover:text-blue-textHover transition-all duration-[500ms] ease-in-out"
                        key={ind}
                      >
                        {url ? (
                          <a
                            href={url}
                            className="w-full"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {title}
                          </a>
                        ) : link ? (
                          <Link href={link} className="w-full">
                            {title}
                          </Link>
                        ) : null}

                        {socials && (
                          <div className=" flex flex-wrap justify-start items-center w-fit gap-3 transition-all duration-150 ease-in-out text-white z-[1]">
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
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="w-[50%] h-full flex md:hidden flex-col justify-start items-start gap-2 ">
            <Link className="!my-0" href="/">
              <Logo className="scale-[0.95]" />
            </Link>
            <p className="break-words text-left max-w-[100%] text-white font-light text-[13px] sm:text-lg">
              We clean, so you don’t
            </p>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-start gap-2">
            <p className="text-blue-50 font-medium txt-heading-alt mb-3 ">
              Be the first to know when we launch.
            </p>

            <div className="flex flex-col justify-start items-center w-full gap-4 sm:gap-5 mb-1.5">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChangeFunc={(val) => setEmail(val)}
              />
              <a
                href="https://calendly.com/cleand-inc/sales/"
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
                  className="w-full"
                />
              </a>
            </div>

            <span className="text-blue-50 font-light txt-base mb-3 md:mb-9 ">
              *Don&apos;t worry we will not spam you {":)"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-start items-center w-full ">
        <p className="w-full h-full text-left text-blue-50 font-light text-xs md:px-6 opacity-[0.9] leading-loose ">
          © {new Date().getFullYear()} Cleand Ltd. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
