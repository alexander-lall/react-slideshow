import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import "./spring-slider.styles.scss";

const SpringSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const length = slides.length;

  const transition = useTransition(currentIndex, {
    from: { transform: `translateX(${direction === "left" ? "-1000px" : "1000px"}` },
    enter: { transform: "translateX(0px)" },
    leave: { transform: `translateX(${direction === "left" ? "1000px" : "-1000px"}` }
  });

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    setDirection("left");
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    setDirection("right");
  };

  return (
    <section className="spring-slider">
      <FaArrowAltCircleLeft className="arrow left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="arrow right-arrow" onClick={nextSlide} />
      <div className="image-container">
        {transition((styles, index) =>   
          <animated.img className='image' style={styles} src={slides[index].image}/>
        )}
      </div>
    </section>
  );
};

export default SpringSlider;
