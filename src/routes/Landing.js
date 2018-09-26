import React, { Component } from 'react';
import Slider from "../components/Slider/Slider";
import LogoImg from "../assets/img/logo.svg";
import slides from "../assets/data/mainSlider.json";

class Landing extends Component {


   render() {
    return (
      <main className="landing">
         <Slider slides={slides}/>
         <img src={LogoImg} alt="Sarah" className="logo"/>
         <section className="landing-presentation" >
            <h1>I'm a<br/> Front-End Developer</h1>
            <h2>With some experience <br/>in Graphic Design</h2>
         </section>
      </main>
    );
  }
}

export default Landing;
