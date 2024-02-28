import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import styles from "../Carousel.module.css";
import LeftArrowSvg from '../../../assets/LeftArrow.svg'; // Import SVG as a regular image

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegining(swiper.isBeginning);
    });
  }, []);

  return (
    <div className={styles.leftNavigation}>
      {!isBegining && (
        <img
          src={LeftArrowSvg}
          alt="Left Arrow"
          className={styles.leftArrow} // You can add a className for styling if needed
          onClick={() => swiper.slidePrev()}
        />
      )}
    </div>
  );
};

export default CarouselLeftNavigation;
