import React from "react";
import { Link } from "react-router-dom";
import Cross from "../../assets/img/cross.svg";

const NavList = ({ isMenuOpen, toggleMenu }) => (
   <section
      id="nav-list"
      className={isMenuOpen ? "menu-list open" : "menu-list "}
      onClick={toggleMenu} style={{cursor: `url(${require('../../assets/img/cross.svg')}), pointer`}}
   >
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/works">Works</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="close-main-nav">Close</button>
   </section>
);

export default NavList;
