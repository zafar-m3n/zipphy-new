import React from "react";
import { banks } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClientSlider = () => {
  return (
    <section className="py-16 md:py-24 relative z-10">
      <h2 className="text-[2rem] font-bold text-secondary text-center mb-16">Our Liquidity Providers</h2>

      <div className="relative z-10 overflow-visible">
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
          className="!overflow-visible !py-4" // override swiper hidden overflow
        >
          {banks.map((bank, index) => (
            <SwiperSlide key={index} className="!overflow-visible">
              <div className="w-44 h-28 mx-auto flex items-center justify-center rounded-lg bg-[#ffffffbb] text-white backdrop-blur-lg border border-white/20 shadow-[0_0_25px_#ffffff]">
                <img src={bank.logo} alt={bank.name} className="w-28 h-16 object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSlider;
