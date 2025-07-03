import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner/banner1.png";
import banner2 from "../assets/banner/banner2.png";
import banner3 from "../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={banner1} alt="Banner 1" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Banner 2" className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Banner 3" className="w-full h-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
