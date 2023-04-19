import React from "react";

import Chevron from "../../../../public/chevron-blue.svg";

const Accordion = ({ data, isCollapsed, onClick }) => {
  const { question, answer } = data;
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-start items-start w-full transition-all duration-[150ms] ease cursor-pointer "
    >
      <div
        className={`flex justify-between items-start w-full py-[12px] ${
          isCollapsed
            ? "border-b-[0.4px] border-grey-border"
            : "border-b border-blue"
        } border-solid`}
      >
        <p className="break-words text-left w-full max-w-[430px] text-grey-dark font-light txt-heading-alt">
          {question}
        </p>
        <button
          className={`${
            !isCollapsed && "-rotate-90"
          } transition-all duration-[150ms] ease`}
        >
          <Chevron />
        </button>
      </div>

      <div
        className={`${
          isCollapsed ? "leading-[0] max-h-[0px] opacity-0" : "leading-normal"
        } py-2 transition-all duration-[150ms] ease cursor-pointer `}
      >
        <p className="break-words text-left max-w-[100%] text-grey-dark font-light text-[13px] sm:text-lg">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
