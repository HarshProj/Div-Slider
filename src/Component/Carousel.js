// Import React and CSS
import React, { useState } from "react";
import "../CSS/Carousel.css";
import {SkipForwardCircle} from "@phosphor-icons/react";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [st, setSt] = useState(0);

  const images = [
    'assets/strength2.jpg','assets/mobility.jpg','assets/drills1.jpg'
  ];

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    setSt(-1);
  };
  function handleclick(){
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }
  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${activeIndex === index ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <h2 className="section">{index==0?"STRENGTH":(index===1?"MOBILITY":"DRILLS")}</h2>
          {/* {activeIndex === index && ( */}
            <span className={`section-right `} style={{display:`${st===index?"block":""}`}}>
              <SkipForwardCircle
                size={30}
                weight="fill"
                onClick={handleclick}
              />
            </span>
          {/* )} */}
          <div style={{backgroundImage:`url(${image})`}} className={`${index===0?"first":""} ${index===(images.length-1)?"last":""}`} />
        </div>
      ))}
    </div>
  );
};

// export default Carousel;
