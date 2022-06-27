import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import SpringSlide from "../spring-slide/spring-slide.component";

import "./spring-multi-slider.styles.scss";

const SpringMultiSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const length = slides.length;

  const indices = [];
  for (let i = 0; i < 3; i++) indices[i] = (i + currentIndex) % length;

  // Slides towards the left 
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    setDirection('left');
  };

  // Slides towards the right
  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    setDirection('right');
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <section className="spring-multi-slider">
      <FaArrowAltCircleLeft className="arrow left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="arrow right-arrow" onClick={nextSlide} />
      <SpringSlide slides={slides} index={indices[0]} direction={direction} leftSlide={true} rightSlide={false} />
      <SpringSlide slides={slides} index={indices[1]} direction={direction} leftSlide={false} rightSlide={false} />
      <SpringSlide slides={slides} index={indices[2]} direction={direction} leftSlide={false} rightSlide={true} />
    </section>
  );
};

export default SpringMultiSlider;
