import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import NavList from "./NavList";
import LogoImg from "../../assets/img/logo.svg";


class Nav extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isMenuOpen: false
      };
   }

   toggleMenu() {
      this.setState(prevState => ({
         isMenuOpen: !prevState.isMenuOpen
      }));
   }


  render() {
    return (
      <nav role="navigation" className="main-nav">
         <Link to="/"><img src={LogoImg} alt="Sarah" className="logo"/></Link>
         <HamburgerMenu isMenuOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu.bind(this)}/>
         <NavList isMenuOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu.bind(this)}/>
      </nav>
    );
  }
}

export default Nav;
