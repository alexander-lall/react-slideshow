import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import './slider.styles.scss';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  }

  if(!Array.isArray(slides) || slides.length === 0) {
      return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='arrow left-arrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='arrow right-arrow' onClick={nextSlide}/>
      {slides.map((elm, idx) => {
        return (
            <div key={idx} className={`slide ${currentIndex === idx ? 'active' : ''}`}>
                {currentIndex === idx && (
                    <img className="image" src={elm.image} alt='Slideshow Element' />
                )}
            </div>
        ); 
      })}
    </section>
  );
};

export default Slider;
