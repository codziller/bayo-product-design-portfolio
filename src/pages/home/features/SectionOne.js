import Link from "next/link";
import React, { useState } from "react";
import { PROJECTS } from "utils/constants";
import ArrowRight from "assets/icons/arrow-right.svg";
const SectionOne = () => {
  const [activeItem, setActiveItem] = useState("");

  const isEven = (i) => !!(i % 2 === 0);
  const isActive = (item) => !!(item === activeItem);
  return (
    <div
      id="projects"
      className="flex flex-col justify-start items-start  w-full min-h-[500px] mb-[100px] md:gap-x-8 px-5 md:px-[8%] lg:px-[7%]"
    >
      <p className="text-grey-dark pb-3 text-[20px] h-[40px] mb-10 pt-12 md:pt-2">
        Featured Projects
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 justify-between items-start w-full">
        {PROJECTS.map(
          (
            {
              title,
              source,
              tags,
              image,
              body,
              button,
              slug,
              href,
              style: { bg, color },
            },
            i
          ) => (
            <div
              key={i}
              className={`flex flex-col justify-start items-start ${bg} ${
                isEven(i) ? "rounded-tl-[56px]" : "rounded-tr-[56px]"
              } w-full px-8 pt-5`}
              onMouseEnter={() => setActiveItem(title)}
              onClick={() => setActiveItem(title)}
              onMouseLeave={() => setActiveItem("")}
            >
              <span className="text-[#7D7D7D] text-base font-thin mb-1.5">
                {source}
              </span>
              <span className="text-black text-[20px] font-medium mb-2">
                {title}
              </span>
              <div
                className={`flex justify-start items-center w-full gap-2.5 mb-12 `}
              >
                {tags.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-start items-center gap-2 text-base font-thin ${color}`}
                  >
                    <div
                      className={`w-[8px] h-[8px] bg-[#7D7D7D] rounded-full `}
                    />{" "}
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center w-full h-[370px] relative overflow-hidden">
                <div
                  className={`flex flex-col justify-center items-center h-full w-full ${image} bg-contain bg-no-repeat p-0 pb-[calc(100% * 3 / 4)] bg-center`}
                />

                <div
                  className={`${
                    isActive(title) ? "translate-y-[0]" : "translate-y-[400px]"
                  } transition-transform duration-500 ease-in absolute top-0 left-0 flex flex-col justify-between items-start min-w-[100%] min-h-[100%] ${bg}`}
                >
                  <p className="text-black text-[20px] font-light mb-2 leading-[1.9] ">
                    {body}
                  </p>

                  <div className="relative w-full h-fit mb-8">
                    <Link
                      href={href || `/projects/${slug}`}
                      className=" flex justify-center items-center gap-2 w-full p-3 bg-white text-center text-[20px] text-black font-normal "
                      target={href && href !== "#" && "_blank"}
                      rel={href && href !== "#" && "noreferrer"}
                    >
                      {button}

                      <ArrowRight />
                    </Link>
                    {href === "#" && (
                      <div className="min-w-[100%] min-h-[100%] absolute top-0 left-0 z-[9] " />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SectionOne;
