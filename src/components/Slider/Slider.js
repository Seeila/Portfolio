import React from "react";
const mappingFunction = (slide, index) => {
   if(window.screen.width < 451 ) {
      return <div key={`slide-${index + 1}`} className="slide" id={`slide-${index + 1}`} style={{background:`url(${require('../../assets/img/slides/' + slide.imgName + '-m.jpg')}) no-repeat center`, backgroundSize:'cover' }}></div>
   } else if(window.screen.width < 1025 ) {
      return <div key={`slide-${index + 1}`} className="slide" id={`slide-${index + 1}`} style={{background:`url(${require('../../assets/img/slides/' + slide.imgName + '-t.jpg')}) no-repeat center`, backgroundSize:'cover' }}></div>
   } else {
         return <div key={`slide-${index + 1}`} className="slide" id={`slide-${index + 1}`} style={{background:`url(${require('../../assets/img/slides/' + slide.imgName + '-d.jpg')}) no-repeat center`, backgroundSize:'cover'  }}></div>
   }
}

const Slider = ({slides}) => (
   <section className="slider">
      <div className="slides-wrapper">
         {slides.map(mappingFunction)}
      </div>
   </section>
);

export default Slider;
