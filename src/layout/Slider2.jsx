import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Slider2() {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="h-[1230px] lg:h-[709px] "
      >
        <SwiperSlide className=" bg-secondaryColor static overflow-hidden">
          <img
            src="/simpleman.png"
            className="bottom-0 absolute lg:right-72 object-center object-cover scale-105 "
          />
          <div className="absolute inset-0 text-white flex flex-col justify-start items-center py-64  text-center gap-3 lg:p-40 lg:text-start">
            <p className="sh5">SUMMER 2024</p>
            <h1 className="sh2 md:sh1 ">Vita Classic Product</h1>
            <p className="sh4 w-72   text-lightTextGray">
              We know how large objects will act, but things on a small scale
            </p>
            <div className="flex lg:flex-row lg:justify-between flex-col gap-3">
              <p className="sh3 text-lightTextGray">$16,48</p>
              <Link to="/shop">
                <button className="sh3 bg-successColor text-white  py-3 px-8 rounded">
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
