import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

export default function ProductDetailSlider({ images }) {
  console.log(images);
  const [thumbsSwiper, setThumbsSwiper] = useState(undefined);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper && { swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[320px] h-[420px] lg:w-[506px] lg:h-[450px]  flex flex-col"
      >
        {images.map((data) => {
          return (
            <SwiperSlide key={data.index}>
              <img
                src={data.url}
                className="object-cover w-full h-full object-top"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[100px] w-[320px] lg:w-[506px] box-border py-[10px]"
      >
        {images.map((data) => {
          return (
            <SwiperSlide key={data.index}>
              <img src={data.url} className="object-cover w-full h-full" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
