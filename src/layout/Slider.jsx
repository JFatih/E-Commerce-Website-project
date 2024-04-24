import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="sm:w-full sm:h-full h-[500px] bg-white text-white max-w-screen-2xl"
      >
        <SwiperSlide className="relative">
          <img
            src="/carousel.png"
            className="sm:w-full h-full object-cover object-top"
          />
          <div className="absolute sm:p-64 inset-0 text-white flex flex-col justify-center items-center sm:items-start text-center sm:text-start sm:gap-5 gap-3">
            <p className="sh5">SUMMER 2024</p>
            <h1 className="sh2 md:sh1 ">NEW COLLECTION</h1>
            <p className="sh4 w-72 sm:w-96 text-lightTextGray">
              We know how large objects will act, but things on a small scale
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
            className="sm:w-full h-full object-cover object-top"
          />
          <div className="absolute sm:p-64 inset-0 text-white flex flex-col justify-center items-center sm:items-start text-center sm:text-start sm:gap-5 gap-3">
            <p className="sh5">SUMMER 2024</p>
            <h1 className="sh2 md:sh1 ">NEW COLLECTION</h1>
            <p className="sh4 w-72 sm:w-96 text-lightTextGray">
              We know how large objects will act, but things on a small scale
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
