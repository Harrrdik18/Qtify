import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ swiper }) => {
  useEffect(() => {
    swiper?.slideTo(0); // Optional chaining operator to safely access slideTo method
  }, [swiper]);

  return null;
};

const Carousel = ({ data, renderCardComponent }) => {
  const swiper = useSwiper();

  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]} // Use an array for modules
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove={true}
      >
        {swiper && <Controls swiper={swiper} />} {/* Render Controls if swiper is defined */}
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
