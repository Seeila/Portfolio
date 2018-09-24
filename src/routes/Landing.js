import React, { Component } from 'react';
import LogoImg from "../assets/img/logo.svg";

class Landing extends Component {
  render() {
    return (
      <main className="landing">
         <img src={LogoImg} alt="Sarah" class="logo"/>
         <section className="landing-presentation">
            <h1>I'm a<br/> Front-End Developer</h1>
            <h2>With some experience <br/>in Graphic Design</h2>
         </section>
      </main>
    );
  }
}

export default Landing;
