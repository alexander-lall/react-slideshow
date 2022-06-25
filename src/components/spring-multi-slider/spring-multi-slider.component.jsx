import { useState } from "react";
import { useTransition, animated } from "react-spring";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import "./spring-multi-slider.styles.scss";

const SpringMultiSlider = ({ slides, slidesPerView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);  
  const [direction, setDirection] = useState("");
  const length = slides.length;

  const map = [];
  for(let i = 0; i < slidesPerView; i++)
    map[i] = (i + currentIndex) % length;

  const transition = useTransition(map, {
    from: { transform: `translatex(${direction === 'left' ? '-350px' : '350px'}` },
    enter: { transform: 'translateX(0px)' },
    leave: { transform: `translateX(${direction === 'left' ? '350px' : '-350px'}` },
  });

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    setDirection('left');
  };

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
      <div className="image-container">
        {transition((styles, index) => {
          console.log(index);
          return <animated.img className='image' style={styles} src={slides[index].image}/>
        })}
      </div>
    </section>
  );
};

export default SpringMultiSlider;
