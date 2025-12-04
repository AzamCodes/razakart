"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

const VerticalSlider = ({ slides :any}) => {
  return (
    <div className="relative w-full h-full">
      {/* One navigation controller only */}
      <div className="absolute top-2 right-2 z-50 flex gap-2">
        <button className="vs-prev bg-black/60 text-white px-3 py-1 rounded">
          ↑
        </button>
        <button className="vs-next bg-black/60 text-white px-3 py-1 rounded">
          ↓
        </button>
      </div>

      <Swiper
        direction="vertical"
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".vs-next",
          prevEl: ".vs-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[260px] rounded-xl overflow-hidden">

              {/* Background Image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Black overlay (doesn’t change your spacing) */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                <div>
                  <p className="text-xs font-bold tracking-wide mb-1">
                    {slide.brand}
                  </p>

                  <h3 className="text-lg font-bold leading-tight mb-1">
                    {slide.title}
                  </h3>

                  {slide.subtitle && (
                    <p className="text-xs opacity-90">{slide.subtitle}</p>
                  )}

                  {slide.badge && (
                    <span className="inline-block mt-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
                      {slide.badge}
                    </span>
                  )}
                </div>

                {/* Always-visible button (your spacing untouched) */}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
