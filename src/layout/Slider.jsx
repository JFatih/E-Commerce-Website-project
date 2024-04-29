import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="lg:w-full lg:h-full h-[500px] bg-white text-white max-w-screen-2xl"
      >
        <SwiperSlide className="relative">
          <img
            src="/carousel.png"
            className="lg:w-full h-full object-cover object-top"
          />
          <div className="absolute lg:p-64 inset-0 text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-start lg:gap-5 gap-3">
            <p className="sh5">SUMMER 2024</p>
            <h1 className="sh2 md:sh1 ">NEW COLLECTION</h1>
            <p className="sh4 w-72 lg:w-96 text-lightTextGray">
              We know how large objects will act, but things on a lgall scale
            </p>
            <Link to="/shop">
              <button className="sh3 mt-4 bg-successColor text-white  py-3 px-8 rounded">
                SHOP NOW
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="/carousel.png"
            className="lg:w-full h-full object-cover object-top"
          />
          <div className="absolute lg:p-64 inset-0 text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-start lg:gap-5 gap-3">
            <p className="sh5">SUMMER 2024</p>
            <h1 className="sh2 md:sh1 ">NEW COLLECTION</h1>
            <p className="sh4 w-72 lg:w-96 text-lightTextGray">
              We know how large objects will act, but things on a lgall scale
            </p>
            <Link to="/shop">
              <button className="sh3 mt-4 bg-successColor text-white  py-3 px-8 rounded">
                SHOP NOW
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
