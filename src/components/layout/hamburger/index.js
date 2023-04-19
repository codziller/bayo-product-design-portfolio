import React from "react";
import PropTypes from "prop-types";
const Hamburger = ({ className, handlecClick, navbarBgIsBlueGradient }) => (
  <button
    className={`hamburger_btn z-[99999] slg:hidden ${className}`}
    onClick={handlecClick}
  >
    <div
      className={`hamburger  ${
        className !== "ham_crossed" ? "bg-black" : "bg-white"
      }`}
    />
    <div
      className={`hamburger ${
        className !== "ham_crossed" ? "bg-black" : "bg-white"
      }`}
    />
    <div
      className={`hamburger ${
        className !== "ham_crossed" ? "bg-black" : "bg-white"
      }`}
    />
  </button>
);
Hamburger.propTypes = {
  handlecClick: PropTypes.func,
  className: PropTypes.string,
  navbarBgIsBlueGradient: PropTypes.bool,
};

export default Hamburger;
