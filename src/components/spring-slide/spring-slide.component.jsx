import { useTransition, animated } from "react-spring";

import "./spring-slide.styles.scss";

const SpringSlide = ({ slides, index, direction, leftSlide, rightSlide }) => {
  const transition = useTransition(index, {
    from: {
      opacity: `${((leftSlide && direction === 'left') || (rightSlide && direction === 'right')) ? '0' : '1'}`,
      transform: `translatex(${direction === 'left' ? '-350px' : '350px'}`,
    },
    enter: {
      opacity: '1',
      transform: 'translateX(0px)',
    },
    leave: {
      opacity: `${((rightSlide && direction === 'left') || (leftSlide && direction === 'right')) ? '0' : '1'}`,
      transform: `translateX(${direction === 'left' ? '350px' : '-350px'}`,
    }
  });

  return (
    <div className="image-container">
      {transition((styles, index) => (
        <animated.img
          className="image"
          style={styles}
          src={slides[index].image}
        />
      ))}
    </div>
  );
};

export default SpringSlide;
