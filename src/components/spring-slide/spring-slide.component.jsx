import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

import "./spring-slide.styles.scss";

const SpringSlide = ({ slides, index, direction, duration, leftSlide, rightSlide }) => {
  const [mounted, setMounted] = useState(false);
  const transition = useTransition(index, {
    from: mounted ? {
      opacity: `${
        (leftSlide && direction === "left") ||
        (rightSlide && direction === "right")
          ? "0"
          : "1"
      }`,
      // Consider margin of image container
      transform: `translateX(${direction === "left" ? "-370px" : "370px"}`,
    } : {},
    enter: {
      opacity: "1",
      transform: "translateX(0px)",
    },
    leave: {
      opacity: `${
        (rightSlide && direction === "left") ||
        (leftSlide && direction === "right")
          ? "0"
          : "1"
      }`,
      // Consider margin of image container
      transform: `translateX(${direction === "left" ? "370px" : "-370px"}`,
    },
    config: { duration }
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="spring-slide-container">
      {transition((styles, index) => ( 
          <animated.img className="image" style={styles} src={slides[index].image} alt='Slide of the slideshow'/>
      ))}
    </div>
  );
};

export default SpringSlide;
