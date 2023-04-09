import React from "react";
import PropTypes from "prop-types";
import Loader from "assets/icons/Loader/Loader.svg";

const Button = ({
  type,
  isOutline,
  text,
  isDisabled,
  onClick,
  icon,
  iconRight,
  isLoading,
  whiteBg,
  redBg,
  blackBg,
  fullWidth,
  borderColor,
  textColor,
  textClass = "",
  height,
  className,
  buttonClass,
  href = undefined,
}) => {
  const btnClass = `
  flex justify-center items-center
  ${height || "h-[40px] md:h-[44px]"} outline-none
  rounded-[50px] md:rounded-[60px] px-8 py-2 medium-font
  transition-all duration-[700ms] ease-in-out cursor-pointer
  ${fullWidth ? "w-full" : ""}
  whitespace-nowrap ${
    isOutline
      ? `bg-transparent ${
          isDisabled
            ? "bg-white/[.2]"
            : " hover:bg-blue-clear hover:border-blue-border"
        } text-black border border-[rgba(0, 0, 0, 0.12)] `
      : whiteBg
      ? `bg-white ${isDisabled ? "bg-white/[.2]" : ""} text-${
          textColor || "grey-text"
        } border border-${borderColor || "grey-border"}`
      : redBg
      ? `bg-red ${isDisabled ? "bg-red/[.2]" : ""} text-white`
      : blackBg
      ? `bg-black ${isDisabled ? "bg-black/[.2]" : ""} text-white hover:bg-blue`
      : ` ${
          isDisabled ? "bg-blue/[.2]" : "bg-blue hover:bg-blue-bright"
        } text-white`
  }`;
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={`z-10 ${fullWidth ? "w-full" : ""} ${className || ""}`}
      href={href}
    >
      {isLoading ? (
        <div className={btnClass}>
          <Loader />
        </div>
      ) : (
        <div className={`${btnClass} space-x-2 ${buttonClass}`}>
          {icon && <div>{icon}</div>}
          <span className={`${textClass}`}>{text}</span>
          {iconRight && <div className={`${textClass}`}>{iconRight}</div>}
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.any,
  isOutline: PropTypes.bool,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  whiteBg: PropTypes.bool,
  redBg: PropTypes.bool,
  blackBg: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.element,
  iconRight: PropTypes.element,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  textClass: PropTypes.string,
  height: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  buttonClass: PropTypes.string,
};

export default Button;
