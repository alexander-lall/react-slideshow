import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import SpringSlide from "../spring-slide/spring-slide.component";

import "./spring-multi-slider.styles.scss";

const SpringMultiSlider = ({ slides, duration }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  const indices = [];
  for (let i = 0; i < 3; i++) indices[i] = (i + currentIndex) % length;

  // Slides towards the left
  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), duration);

    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    setDirection("left");
  };

  // Slides towards the right
  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), duration);

    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    setDirection("right");
  };

  return (
    <section className="spring-multi-slider">
      <button
        className="button left-button"
        disabled={isAnimating}
        onClick={prevSlide}
      >
        <FaArrowAltCircleLeft className="arrow" />
      </button>

      <button
        className="button right-button"
        disabled={isAnimating}
        onClick={nextSlide}
      >
        <FaArrowAltCircleRight className="arrow" />
      </button>

      <SpringSlide
        slides={slides}
        index={indices[0]}
        direction={direction}
        duration={duration}
        leftSlide={true}
        rightSlide={false}
      />

      <SpringSlide
        slides={slides}
        index={indices[1]}
        direction={direction}
        duration={duration}
        leftSlide={false}
        rightSlide={false}
      />

      <SpringSlide
        slides={slides}
        index={indices[2]}
        direction={direction}
        duration={duration}
        leftSlide={false}
        rightSlide={true}
      />
    </section>
  );
};

export default SpringMultiSlider;
