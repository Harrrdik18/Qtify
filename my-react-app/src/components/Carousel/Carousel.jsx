import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Install Swiper modules

const Carousel = ({ albums }) => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={8}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
      {albums.map(album => (
        <SwiperSlide key={album.id}>
          <div>
            {/* Render album details */}
            <img src={album.image} alt={album.title} />
            <p>{album.title}</p>
            <p>{album.artist}</p>
            <p>{album.follows} followers</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
