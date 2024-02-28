import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "../Carousel.module.css";
import rightArrow from '../../../assets/RightArrow.svg';

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <img src={rightArrow} alt="Right Arrow" onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
