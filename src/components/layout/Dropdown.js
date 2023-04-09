import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import ArrowRight from "assets/icons/Arrow/arrow-right-blue.svg";

const Dropdown = ({ links, path, onClick }) => {
  return (
    <div
      className={`flex flex-col justify-start align-start space-y-1.5 bg-white h-fit shadow-[0px 0px 30px rgba(101, 113, 124, 0.1)] pl-3.5 pr-8 py-7 rounded-[14px] border-1/2 border-grey-bordercolor absolute animate-slide -left-[10px] -top-[20px] z-[999] `}
    >
      {links?.map(({ name, link, icon, href }) =>
        link ? (
          <Link
            href={link}
            key={name}
            className={`flex justify-start items-center hover:text-blue text-grey-text medium-font whitespace-nowrap gap-2 ${
              path.includes(link) && "!text-blue"
            }`}
            onClick={onClick}
          >
            {icon && icon}
            <span className="text-current whitespace-nowrap">{name}</span>
          </Link>
        ) : href ? (
          <a
            href={href}
            key={name}
            className={`flex justify-between items-center p-4 hover:text-blue text-grey-text text-base medium-font whitespace-nowrap gap-2`}
            onClick={onClick}
            target="_blank"
            rel="noreferrer"
          >
            {icon && icon}
            <span className="text-current whitespace-nowrap">{name}</span>
            <ArrowRight className="scale-[0.7]" />
          </a>
        ) : null
      )}
    </div>
  );
};

Dropdown.propTypes = {
  links: PropTypes.array,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default Dropdown;
