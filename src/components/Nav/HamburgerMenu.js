import React from "react";

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => (
   <button
      className={isMenuOpen ? "hamburger-btn open" : "hamburger-btn "}
      aria-haspopup="true"
      aria-expanded="false"
      aria-controls="nav-list"
      aria-label="Menu"
      onClick={toggleMenu}
   >
      <span />
      <span />
      <span />
      <span />
   </button>
);

export default HamburgerMenu;
