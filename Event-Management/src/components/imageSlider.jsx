import React, { useState, useEffect } from "react";
import techfest from "../assets/images/gallery-images/techfest.jpg";
import coding from "../assets/images/gallery-images/entrepreneurship.jpg";
import painting from "../assets/images/gallery-images/hackathone.jpg";
import robotics from "../assets/images/gallery-images/aiworkshop.jpg";
import "../css/slider.css";

const images = [techfest, coding, painting, robotics];


function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="Campus Event" className="slide-img" />
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
