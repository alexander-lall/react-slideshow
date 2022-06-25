import { useState } from 'react';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import './multi-slider.styles.scss';

const MultiSlider = ({ slides, slidesPerView }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = slides.length - slidesPerView;

    const prevSlide = () => {
        if(currentIndex > 0) setCurrentIndex(currentIndex - 1);
    }

    const nextSlide = () => {
        if(currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    }

    if(!Array.isArray(slides) || slides.length === 0) {
        return null;
    }

    return (
        <section className='multi-slider'>
        <FaArrowAltCircleLeft className='arrow left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='arrow right-arrow' onClick={nextSlide}/>
        {slides.map((elm, idx) => {
            return (
                <div key={idx} className={`slide ${idx >= currentIndex && idx <= currentIndex + slidesPerView - 1 ? 'active' : ''}`}>
                    {idx >= currentIndex && idx <= currentIndex + slidesPerView - 1 &&
                        <img className="image" src={elm.image} alt='Slideshow Element' />
                    }                    
                </div>
            );
        })}
        </section>
    )
}

export default MultiSlider;