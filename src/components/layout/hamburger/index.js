import React from "react";
import PropTypes from "prop-types";
const Hamburger = ({ className, handlecClick, navbarBgIsBlueGradient }) => (
  <button
    className={`hamburger_btn z-[9999] lg:hidden ${className}`}
    onClick={handlecClick}
  >
    <div className={`hamburger  bg-black`} />
    <div className={`hamburger bg-black`} />
    <div className={`hamburger bg-black`} />
  </button>
);
Hamburger.propTypes = {
  handlecClick: PropTypes.func,
  className: PropTypes.string,
  navbarBgIsBlueGradient: PropTypes.bool,
};

export default Hamburger;
