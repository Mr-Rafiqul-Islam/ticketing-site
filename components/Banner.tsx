"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000  }}
        speed={1000}
        slidesPerView={1}
        className="custom-swiper"
      >
        <SwiperSlide>
          <Image
            src="/banner-1.jpeg"
            alt="Banner 1"
            width={1920}
            height={300}
            className="w-full h-[200px] md:h-[500px] object-cover lg:object-fill"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/banner-2.jpg"
            alt="Banner 1"
            width={1920}
            height={300}
            className="w-full h-[200px] md:h-[500px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
