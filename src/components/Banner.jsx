import React, { useState, useEffect } from "react";
import "./Banner.css";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import banner4 from "../images/banner4.png";

const banners = [
  banner1,
  banner2,
  banner3,
  banner4,
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((img, index) => (
          <img key={index} src={img} alt={`banner-${index}`} className="slide" />
        ))}
      </div>

      {/* Left and Right buttons */}
      <button className="nav-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-btn next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dots (indicators) */}
      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
