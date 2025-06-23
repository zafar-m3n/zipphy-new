import React from "react";
import { banks } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClientSlider = () => {
  return (
    <section className="py-8 md:py-16">
      <h2 className="text-[2rem] font-bold text-secondary text-center mb-12">Our Liquidity Providers</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2.5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        breakpoints={{
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {banks.map((bank, index) => (
          <SwiperSlide key={index}>
            <img src={bank.logo} alt={bank.name} className="w-36 h-16 object-contain mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientSlider;
