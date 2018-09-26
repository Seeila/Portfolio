import React, {Component} from 'react';
import Slider from "../components/Slider/Slider";
import LogoImg from "../assets/img/logo.svg";
import slides from "../assets/data/mainSlider.json";

class Landing extends Component {
   //moves the target element on the opposite direction of the edge the mouse entered
   moveElement = (event) => {
      if (event.target === event.currentTarget && window.screen.width > 1024) {
         let direction = this.enteredEdge(event);

         if (direction === "left") {
            event.target.style.transform = "translateX(20px)";
            event.target.style.boxShadow = "20px 0px 30px rgba(15,32,39,0.5)";
         } else if (direction === "right") {
            event.target.style.transform = "translateX(-20px)";
            event.target.style.boxShadow = "-20px 0px 30px rgba(15,32,39,0.5)";
         } else if (direction === "bottom") {
            event.target.style.transform = "translatey(-20px)";
            event.target.style.boxShadow = "0 -20px 30px rgba(15,32,39,0.5)";
         } else {
            event.target.style.transform = "translatey(20px)";
            event.target.style.boxShadow = "0 20px 30px rgba(15,32,39,0.5)";
         }
      }
   }

   restoreElementPosition(event) {
      event.target.style.transform = "translate(0)";
      event.target.style.boxShadow = "0 0 30px rgba(15,32,39,0.5)";
   }

   // detects the entered edge of the element with the mouse
   enteredEdge(e) {
      let targetBounds = e.target.getBoundingClientRect();
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let topDist = Math.abs(targetBounds.top - mouseY);
      let bottomDist = Math.abs(targetBounds.bottom - mouseY);
      let leftDist = Math.abs(targetBounds.left - mouseX);
      let rightDist = Math.abs(targetBounds.right - mouseX);

      let min = Math.min(topDist, bottomDist, leftDist, rightDist);

      switch (min) {
         case leftDist:
            return "left";
         case rightDist:
            return "right";
         case topDist:
            return "top";
         case bottomDist:
            return "bottom";
      }
   }

   render() {
      return (<main className="landing">
         <Slider slides={slides}/>
         <img src={LogoImg} alt="Sarah" className="logo" onMouseEnter={this.moveElement} onMouseLeave={this.restoreElementPosition}/>
         <section className="landing-presentation" onMouseOver={this.moveElement} onMouseLeave={this.restoreElementPosition}>
            <h1>I'm a<br/>
               Front-End Developer</h1>
            <h2>With some experience
               <br/>in Graphic Design</h2>
         </section>
      </main>);
   }
}

export default Landing;
